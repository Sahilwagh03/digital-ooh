import BentoGrid from "./bento-grid";

const FeatureSection = () => {
  return (
    <section className="w-full h-full pb-12 lg:pb-24 pt-6 lg:pt-12">
      <div className="max-w-340 mx-auto px-4 flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-4 text-center justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Features That Helps Your Business For <span className="text-orange-400">10X</span> Growth
          </h2>
          <p className="font-medium text-neutral-600 dark:text-neutral-300 max-w-sm lg:max-w-max">
            Multiple modules, one seamless workflow powered by native AI
          </p>
        </div>
        <BentoGrid/>
      </div>
    </section>
  );
};

export default FeatureSection;
