import { ArrowUpRight, User, LayoutDashboard, ShieldCheck, Zap } from "lucide-react";

const howItWorksData = [
  {
    id: 1,
    title: "Create an Account",
    description: "Get started in seconds with a simple and quick signup process",
    icon: <User className="size-5" />,
  },
  {
    id: 2,
    title: "Intuitive Interface",
    description: "Modern, clean design that feels natural from day one",
    icon: <LayoutDashboard className="size-5" />,
  },
  {
    id: 3,
    title: "Role-Based Access",
    description: "Access tailored for every role",
    icon: <ShieldCheck className="size-5" />,
  },
  {
    id: 4,
    title: "AI-Powered Automation",
    description: "Automate workflows and decisions with smart AI assistance",
    icon: <Zap className="size-5" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT */}
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* Heading */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-xl">
                So Simple,
                <br /> <span className="text-orange-400">Anyone</span> Can Use It
              </h2>

              <p className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 max-w-md">
                No tech skills required. If you can use WhatsApp, you can use
                DigitalOOH. AI guides you every step of the way.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3 md:gap-4">
              {howItWorksData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-3 md:p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
                >
                  
                  <div className="flex gap-3 items-center min-w-0">
                    
                    {/* Icon */}
                    <div className="p-2 bg-orange-400 text-white rounded-lg border border-orange-400 flex-shrink-0">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base md:text-lg font-medium truncate">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow (FIXED) */}
                  <ArrowUpRight className="size-5 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT (Illustration Placeholder) */}
          <div className="w-full h-64 md:h-auto bg-neutral-100 dark:bg-neutral-900 rounded-2xl" />

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;