'use client';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import OnboardingLayout from "./layout/onboarding-layout";
import {
  OnboardingProvider,
  useOnboarding,
} from "@/context/onboarding-context";
import { WorkspaceStep } from "./workspace";
import { VerifyStep } from "./verify-step";
import { CalendlyStep } from "./calendly-step";
import { OnboardingSuccess } from "./onboarding-success";

const OnboardingModalContent = () => {
  const { data } = useOnboarding();

  switch (data.step) {
    case 1:
      return <WorkspaceStep />;
    case 2:
      return <VerifyStep />;
    case 3:
      return <CalendlyStep />;
    default:
      return <OnboardingSuccess />;
  }
};

const OnboardingModalInner = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, setIsModalOpen } = useOnboarding();

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    // If closing manually, reset will be called by setIsModalOpen
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw]! max-h-[95vh] w-full h-full p-0">
        <OnboardingLayout>
          <div className="w-full h-full flex items-center justify-center">
            <OnboardingModalContent />
          </div>
        </OnboardingLayout>
      </DialogContent>
    </Dialog>
  );
};

const OnboardingModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnboardingProvider>
      <OnboardingModalInner>{children}</OnboardingModalInner>
    </OnboardingProvider>
  );
};

export default OnboardingModal;
