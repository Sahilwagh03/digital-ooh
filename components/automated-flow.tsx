"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";

import { CheckCircle2, Bot, MailCheck } from "lucide-react";
import Logo from "./logo";
import GoogleSheet from "./icons/google-sheet";
import GoogleDrive from "./icons/google-drive";
import Image from "next/image";

// Circle Component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full border shadow-md size-12 sm:size-14 md:size-18",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AutomatedFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const [curve, setCurve] = useState(125);

  const COMMON_DURATION = 4;
  const COMMON_DELAY = 0.4;

  useEffect(() => {
    const updateCurves = () => {
      const width = containerRef.current?.offsetWidth || 1200;
      setCurve(width < 1024 ? 90 : 125);
    };

    updateCurves();
    window.addEventListener("resize", updateCurves);
    return () => window.removeEventListener("resize", updateCurves);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-hidden py-12 md:py-20"
    >
      <div className="grid w-full max-w-7xl grid-cols-3 gap-y-8 md:gap-y-16 lg:gap-y-20 items-center justify-items-center">
        {/* Row 1 */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleSheet />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium">
            Manual Excel
          </span>
        </div>
        <div /> {/* empty center */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div5Ref}>
            <Icons.autoComplete />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium text-center max-w-32">
            Complete Campaign Lifecycle
          </span>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div2Ref}>
            <Icons.googleDrive />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium">
            Manual Upload
          </span>
        </div>
        {/* CENTER */}
        <div className="flex flex-col items-center gap-2">
          <Circle
            ref={div4Ref}
            className="bg-orange-400 dark:bg-orange-400 text-white shadow-xl size-16 sm:size-20 md:size-24"
          >
            <Icons.openai />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium">
            DigitalOOH Engine
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div6Ref}>
            <Icons.autoBot />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium">
            AI Assistant
          </span>
        </div>
        {/* Row 3 */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div3Ref}>
            <Icons.payment />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium">
            Revenue Loss
          </span>
        </div>
        <div /> {/* empty center */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div7Ref}>
            <Icons.autoEmail />
          </Circle>
          <span className="hidden lg:flex text-xs text-muted-foreground font-medium  text-center max-w-32">
            Financial Control Center
          </span>
        </div>
      </div>

      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-curve}
        endYOffset={-10}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={curve}
        endYOffset={10}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-curve}
        endYOffset={-10}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={curve}
        endYOffset={10}
        duration={COMMON_DURATION}
        delay={COMMON_DELAY}
      />
    </div>
  );
}

const Icons = {
  googleSheet: () => <GoogleSheet className="size-5 md:size-6 lg:size-9" />,

  googleDrive: () => <GoogleDrive className="size-5 md:size-6 lg:size-9" />,

  payment: () => (
    <Image
      src="/razorpay.png"
      alt="Razor Pay"
      width={100}
      height={100}
      className="size-5 md:size-6 lg:size-9"
    />
  ),

  openai: () => (
    <Logo className="size-5 sm:size-6 md:size-7 lg:size-9 text-white" />
  ),

  autoComplete: () => (
    <CheckCircle2 className="size-6 lg:size-9 text-emerald-500 fill-emerald-100" />
  ),

  autoBot: () => (
    <Bot className="size-6 lg:size-9 text-violet-500 fill-violet-100" />
  ),

  autoEmail: () => (
    <MailCheck className="size-6 lg:size-9 text-blue-500 fill-blue-100" />
  ),
};
