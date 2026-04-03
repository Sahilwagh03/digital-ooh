"use client";
import Logo from "@/components/logo";
import { OnboardingStepper } from "@/components/onboarding-stepper";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full bg-white rounded-xl">
      <aside className="relative hidden w-105 border-r border-neutral-200 bg-neutral-50 lg:flex flex-col justify-between z-10 rounded-tl-xl rounded-bl-xl">
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-orange-400 p-2 rounded-lg">
              <Logo className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">DigitalOOH</span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Start your free trial
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Set up your workspace and start managing your OOH business in
              minutes.
            </p>
          </div>
        </div>

        <div className="w-full h-full px-6 lg:px-8">
          <OnboardingStepper />
        </div>
      </aside>

      <main className="flex-1 flex items-center justify-center rounded-tr-xl rounded-br-xl">
        <div className="w-full h-full p-4">{children}</div>
      </main>
    </div>
  );
};

export default OnboardingLayout;
