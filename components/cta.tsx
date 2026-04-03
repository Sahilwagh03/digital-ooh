import { ArrowUpRight } from "lucide-react";
import OnboardingModal from "./onboarding-modal";

const CTA = () => {
  return (
    <section className="w-full flex justify-center items-center py-6 lg:py-12 px-4">
      <div
        className="relative w-full max-w-7xl flex justify-center flex-col
          rounded-2xl overflow-hidden p-5 py-8 lg:p-8 lg:py-28 text-center"
        style={{
          background:
            "linear-gradient(135deg, #fb923c 0%, #f97316 60%, rgba(249,115,22,0.85) 100%)",
        }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/orange-grain.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            mixBlendMode: "overlay", // ← was soft-light
            opacity: 0.2, // ← was 0.18
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 text-center items-center mb-6 lg:mb-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
            Ready to Transform Your OOH Business? Start your free trial today.
          </h2>
          <p className="text-sm sm:text-base font-medium max-w-md leading-relaxed text-white/90">
            Join thousands of businesses using DigitalOOH to simplify
            operations, boost efficiency, and scale faster.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3 justify-center">
          <OnboardingModal>
            <button className="cursor-pointer flex items-center gap-2 px-4 lg:px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">
              Start Free Trial
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </OnboardingModal>
          <button className="cursor-pointer flex items-center gap-2 px-4 lg:px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-white dark:hover:bg-neutral-800 transition backdrop-blur-sm">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
