import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import Logo from "./logo";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full -mt-18 px-3 sm:px-4 md:px-6 rounded-2xl">
      <div className="relative overflow-hidden w-full lg:min-h-screen max-w-350 mx-auto rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-950">
        
        <InteractiveGridPattern
          width={70}
          height={70}
          squaresClassName="fill-white dark:fill-neutral-800 stroke-gray-400/10 dark:stroke-gray-400/20"
          className="rounded-2xl sm:rounded-3xl border-0"
        />

        <div className="absolute inset-0 bg-linear-to-t from-orange-400 via-orange-300/18 to-transparent dark:from-orange-500 dark:via-orange-400/35 pointer-events-none z-10" />

        <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 px-2">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300/60 dark:border-orange-500/30 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm text-[0.65rem] sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8 shadow-sm">
            <span className="text-orange-500">⚡</span>
            AI-Powered Digital Transformation
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] max-w-4xl">
            All in One Solution{" "}
            <span className="inline-flex items-center justify-center bg-orange-400 rounded-xl w-14 h-14 sm:w-16 sm:h-16 mx-1 align-middle mb-1">
              <Logo className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
            </span>{" "}
            for
            <br />
            OOH Media Owners
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            Centralize your OOH operations in one powerful platform. Manage
            inventory, campaigns, leads, and revenue all in one place.
          </p>
          <div className="mt-8 flex items-center gap-3 flex-wrap justify-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-white dark:hover:bg-neutral-800 transition backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          <div className="mt-14 w-full max-w-6xl mx-auto">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={1280}
              height={800}
              className="w-full h-full rounded-tl-lg rounded-tr-lg lg:rounded-tl-2xl lg:rounded-tr-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;