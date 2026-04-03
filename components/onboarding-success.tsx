"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/onboarding-context";

export const OnboardingSuccess = () => {
  const { setIsModalOpen } = useOnboarding();

  useEffect(() => {
    const duration = 1200;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 90,
        spread: 40,
        startVelocity: 20,
        gravity: 0.8,
        origin: { x: Math.random(), y: 0 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleDone = () => {
    // Close modal - this will trigger reset
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
            <CheckCircle2 className="text-green-600" size={28} />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-2">Finish Setup 🎉</h1>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          All set! Your workspace is ready to start running campaigns and
          managing your OOH business.
        </p>

        <Button
          className="cursor-pointer bg-orange-400 text-white w-full py-5"
          onClick={handleDone}
        >
          Done
        </Button>
      </div>
    </div>
  );
};