"use client";

import { useOnboarding } from "@/context/onboarding-context";
import { BrandColorPicker } from "./ui/color-picker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const WorkspaceStep = () => {
  const { data, setWorkspaceField, loading, setLoading, nextStep } = useOnboarding();

  const { businessName, themeColor } = data.workspace;
  const isLoading = loading.workspace;

  const handleSubmit = () => {
    if (!businessName) return;

    console.log("Workspace Data:", {
      businessName,
      themeColor,
    });

    setLoading("workspace", true);

    setTimeout(() => {
      setLoading("workspace", false);
      nextStep();
    }, 2500);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="animate-spin w-10 h-10 border-2 border-t-transparent rounded-full" />
        <p className="text-sm text-neutral-600 text-center">
          Your OOH ecosystem <br />
          <span className="font-medium">{businessName}.digitalooh.io</span> is
          getting ready...
        </p>
        <p className="text-xs text-neutral-400">Moving you to next step...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">Create Workspace</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Setup your business environment in seconds.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm text-neutral-500 font-semibold">
            Business Name
          </span>
          <Input
            value={businessName}
            onChange={(e) => setWorkspaceField("businessName", e.target.value)}
            placeholder="Business Name"
            className="h-11"
          />
        </div>

        <div className="flex items-center gap-3 w-full">
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm text-neutral-500 font-semibold">
              Pick your brand color
            </span>

            <BrandColorPicker
              value={themeColor}
              onChange={(color) => setWorkspaceField("themeColor", color)}
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!businessName}
        className="w-full cursor-pointer bg-orange-400 hover:bg-orange-500 disabled:opacity-50 text-white py-5 rounded-lg text-sm font-medium"
      >
        Create My Workspace
      </Button>
    </div>
  );
};
