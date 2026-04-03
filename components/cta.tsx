import { ArrowUpRight } from "lucide-react";

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
            Join thousands of businesses using DigitalOOH to simplify operations, boost efficiency, and scale faster.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3 justify-center">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-700 transition">
            Start Free Trail
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition backdrop-blur-sm">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
