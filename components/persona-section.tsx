import PersonaTabs from "./persona-tabs";

const PersonaSection = () => {
  return (
    <section className="w-full h-full pb-6 lg:pb-12 lg:pt-12">
      <div className="max-w-340 mx-auto px-4 lg:px-8 flex flex-col items-start lg:flex-row gap-6">
        <div className="flex-4 flex flex-col gap-4 justify-center items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-md">
            Built for the Entire OOH{" "}
            <span className="text-orange-400">Ecosystem</span>
          </h2>
          <p className="font-medium text-neutral-600 dark:text-neutral-300 max-w-sm lg:max-w-md">
            Role-based access tailored for every team. Admin, Operator, Finance, Member, Field Agent—everyone gets exactly what they need.
          </p>
        </div>
        <PersonaTabs/>
      </div>
    </section>
  );
};

export default PersonaSection;
