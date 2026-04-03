# Onboarding Flow Refactor - Summary

## Overview
The onboarding system has been refactored to centralize all state management in the context, making it easier to maintain, debug, and extend.

## Previous Issues Fixed

### ❌ Before:
- **Local State Duplication**: Each component managed its own state (businessName, email, phone, otp, etc.)
- **No Modal Control**: Modal couldn't be closed programmatically from context
- **Incomplete Reset**: Reset didn't close the modal
- **No Modal Close Handling**: Closing the modal didn't reset states
- **Scattered Loading States**: Loading states were spread across components

### ✅ After:
- **Single Source of Truth**: All data managed in context
- **Centralized Modal Control**: Open/close managed from context
- **Complete Reset**: Reset closes modal automatically
- **Auto-Reset on Close**: Modal close triggers state reset
- **Unified Loading States**: All loading states in context

---

## Architecture

### Context Structure (`onboarding-context.tsx`)

```typescript
// Main state
data: OnboardingState {
  step: number
  workspace: { businessName, themeColor }
  verify: { email, phone, otp, isVerified }
}

// Modal control
isModalOpen: boolean
setIsModalOpen: (open: boolean) => void

// Loading states per step
loading: {
  workspace: boolean
  verify: boolean
  calendly: boolean
}
setLoading: (step, value) => void

// Setters with proper updates
setWorkspaceField: (field, value) => void
setVerifyField: (field, value) => void
```

---

## How It Works

### 1. **Opening Modal**
When the user clicks a button/link with `OnboardingModal`:
```jsx
import OnboardingModal from "@/components/onboarding-modal";

<OnboardingModal>
  <Button>Start Onboarding</Button>
</OnboardingModal>
```

### 2. **Form Flow**
Each step reads from context and updates it:

**Workspace Step:**
```jsx
const { data, setWorkspaceField, loading, setLoading, nextStep } = useOnboarding();

// Values from context
const { businessName, themeColor } = data.workspace;

// Update on change
onChange={(e) => setWorkspaceField("businessName", e.target.value)}

// Submit with loading
handleSubmit = () => {
  setLoading("workspace", true);
  // API call...
  setTimeout(() => {
    setLoading("workspace", false);
    nextStep(); // Goes to step 2
  }, 2500);
}
```

### 3. **Closing Modal - Two Ways**

**Option A: Click "Done" on Success Screen**
```jsx
const handleDone = () => {
  setIsModalOpen(false); // Closes dialog + resets state
};
```

**Option B: Close Button/ESC Key**
- The dialog's `onOpenChange` handler calls `setIsModalOpen(false)`
- This automatically triggers `reset()` in the context setter

### 4. **Data Persistence**
All form data is preserved in context across steps:
```jsx
// Step 1 data survives when moving to step 2
// Step 2 data survives when moving to step 3
// etc.

// Only resets when modal is closed
reset() → Clears all steps and data
```

---

## Component Responsibilities

### `onboarding-context.tsx`
- Manages all state (data, modal, loading)
- Handles modal open/close logic
- Provides setters for field updates
- Auto-resets on modal close

### `onboarding-modal.tsx`
- Wraps the provider
- Connects dialog open state to context
- Handles modal close to trigger reset

### Step Components (workspace, verify, calendly)
- Read from context (`data`, `loading`)
- Update context on input change (`setWorkspaceField`, `setVerifyField`)
- Use context loaders during async operations (`setLoading`)
- Navigate with context (`nextStep`, `prevStep`, `goToStep`)

### `onboarding-success.tsx`
- Shows completion state
- Closes modal with `setIsModalOpen(false)`
- Modal close → Context resets

---

## Context API Reference

### Reading Data
```jsx
const { data } = useOnboarding();

// Access form data
data.workspace.businessName
data.workspace.themeColor
data.verify.email
data.verify.phone
data.verify.otp
data.verify.isVerified

// Access loading state
const { loading } = useOnboarding();
loading.workspace // true/false
loading.verify    // true/false
loading.calendly  // true/false
```

### Updating Data
```jsx
// Option 1: Update entire object
setWorkspace({ businessName: "Acme Corp", themeColor: "#FF0000" })
setVerify({ email: "user@company.com", phone: "+91..." })

// Option 2: Update single field (recommended)
setWorkspaceField("businessName", "Acme Corp")
setVerifyField("email", "user@company.com")
```

### Managing Loading
```jsx
const { setLoading } = useOnboarding();

// Show loading for a step
setLoading("workspace", true);

// Hide loading after async work
setLoading("workspace", false);
```

### Navigation
```jsx
const { nextStep, prevStep, goToStep } = useOnboarding();

nextStep()      // Move to next step
prevStep()      // Move to previous step
goToStep(2)     // Jump to specific step
```

### Modal Control
```jsx
const { setIsModalOpen } = useOnboarding();

setIsModalOpen(true)   // Open modal
setIsModalOpen(false)  // Close modal (auto-resets)
```

---

## Data Flow Diagram

```
User Opens Modal
    ↓
OnboardingProvider wraps OnboardingModal
    ↓
Modal opens → isModalOpen = true
    ↓
Step 1: WorkspaceStep
  ├─ Reads: businessName, themeColor
  ├─ Updates: setWorkspaceField()
  ├─ Loading: setLoading("workspace", true/false)
  └─ Next: nextStep() → step 2
    ↓
Step 2: VerifyStep
  ├─ Reads: email, phone, otp, isVerified
  ├─ Updates: setVerifyField()
  ├─ Loading: setLoading("verify", true/false)
  └─ Next: nextStep() → step 3
    ↓
Step 3: CalendlyStep
  ├─ Shows Calendly widget
  └─ Next: nextStep() → step 4 (success)
    ↓
Step 4: OnboardingSuccess
  ├─ Shows confetti animation
  └─ Done: setIsModalOpen(false)
    ↓
Modal closes → Context auto-resets
All state cleared
```

---

## Adding New Steps

To add a new step (e.g., step 5 - Integrations):

### 1. Update Types (`onboarding.ts`)
```typescript
export type OnboardingState = {
  step: number;
  workspace: WorkspaceData;
  verify: VerifyData;
  integrations: IntegrationsData;  // Add new data type
};

export type LoadingState = {
  workspace: boolean;
  verify: boolean;
  calendly: boolean;
  integrations: boolean;  // Add new loading state
};
```

### 2. Update Context (`onboarding-context.tsx`)
```typescript
const initialOnboardingState: OnboardingState = {
  // ... existing
  integrations: { syncFrequency: "daily" },  // Add initial state
};

const initialLoadingState: LoadingState = {
  // ... existing
  integrations: false,  // Add initial loading
};

// Add setters
const setIntegrations = (payload: Partial<IntegrationsData>) => {
  setData((prev) => ({
    ...prev,
    integrations: { ...prev.integrations, ...payload },
  }));
};

const setIntegrationsField = (field: keyof IntegrationsData, value: any) => {
  setData((prev) => ({
    ...prev,
    integrations: { ...prev.integrations, [field]: value },
  }));
};

// Add to context value
{
  // ... existing
  setIntegrations,
  setIntegrationsField,
}
```

### 3. Create Step Component
```jsx
export const IntegrationsStep = () => {
  const { data, setIntegrationsField, loading, setLoading, nextStep } = useOnboarding();
  
  // Use pattern from other steps...
};
```

### 4. Add to Modal Switch
```jsx
const OnboardingModalContent = () => {
  const { data } = useOnboarding();

  switch (data.step) {
    case 1:
      return <WorkspaceStep />;
    case 2:
      return <VerifyStep />;
    case 3:
      return <CalendlyStep />;
    case 4:
      return <IntegrationsStep />;  // Add new step
    default:
      return <OnboardingSuccess />;
  }
};
```

### 5. Add to Stepper (if applicable)
Update `onboarding.constant.ts` to include the new step in the UI stepper.

---

## Best Practices

✅ **Do's:**
- Always use context setters instead of local state
- Use `setWorkspaceField` / `setVerifyField` for single updates
- Keep loading states aligned with async operations
- Reset state when modal closes (automatic)
- Use `setIsModalOpen(false)` to close modal cleanly

❌ **Don'ts:**
- Don't manage form state locally in components
- Don't access context state outside OnboardingProvider
- Don't forget to set `setLoading(false)` after async work
- Don't call `reset()` directly - use `setIsModalOpen(false)` instead

---

## Testing Checklist

- [ ] Modal opens when button clicked
- [ ] Form data persists across steps
- [ ] Loading spinners show during submission
- [ ] Navigation between steps works
- [ ] "Done" button closes modal
- [ ] Manual close (X or ESC) resets states
- [ ] Modal reopens with blank form
- [ ] All form fields empty after reset
- [ ] Stepper shows correct steps
- [ ] Success animation plays
