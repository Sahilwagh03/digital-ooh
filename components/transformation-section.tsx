import { AutomatedFlow } from "./automated-flow";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";

const TransformationSection = () => {
  return (
    <section className="relative w-full h-full py-6 lg:py-12 ">
      <InteractiveGridPattern
        width={70}
        height={70}
        squares={[100, 100]}
        squaresClassName="fill-white dark:fill-neutral-800 stroke-gray-400/10 dark:stroke-gray-400/5"
        className="w-full h-full z-0 border-0 mask-[radial-gradient(700px_circle_at_center,white,transparent)] lg:mask-[radial-gradient(800px_circle_at_center,white,transparent)] xl:mask-[radial-gradient(1200px_circle_at_center,white,transparent)]"
      />

      <div className="relative max-w-340 mx-auto px-2 z-10">
        <div className="flex flex-col gap-4 text-center justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-xl">
            Stop Losing Revenue to Manual Chaos
          </h2>
          <p className="font-medium text-neutral-600 dark:text-neutral-300 max-w-xs lg:max-w-md">
            73% of media owners lose revenue to manual tracking errors. Not
            anymore.
          </p>
        </div>
        <AutomatedFlow />
      </div>
    </section>
  );
};

export default TransformationSection;
