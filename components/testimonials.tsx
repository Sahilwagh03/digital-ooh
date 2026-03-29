"use client";

import Image from "next/image";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { rows, testimonials, testimonialsData } from "@/constant/home";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const Testimonials = () => {
  return (
    <section className="relative w-full py-8 lg:py-14 overflow-hidden">
      {/* ✅ GRID (BEHIND) */}
      <InteractiveGridPattern
        width={70}
        height={70}
        squaresClassName="fill-transparent stroke-gray-400/10 dark:stroke-gray-400/20 hover:fill-orange-300 transition-all duration-300"
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      {/* ✅ CONTENT (pass-through) */}
      <div className="relative max-w-340 mx-auto z-10 pointer-events-none">
        {/* Heading */}
        <div className="flex flex-col gap-4 text-center items-center mb-10 pointer-events-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-xl">
            Trusted by <span className="text-orange-400">Leading</span> Media
            Owners Worldwide
          </h2>

          <p className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 max-w-sm lg:max-w-md">
            Join hundreds achieving 10X growth through digital transformation
          </p>
        </div>

        {/* Cards */}
        {/* <div className="flex justify-center pointer-events-auto">
          <div className="flex items-center overflow-x-auto sm:overflow-visible px-2 sm:px-0 scrollbar-hide">
            {testimonialsData.map((item, index) => (
              <div
                key={item.id}
                className={`group shrink-0 ${index !== 0 ? "-ml-4" : ""}`}
              >
                <TestimonialCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div> */}

<div className="relative overflow-hidden">
  {/* fade edges */}
  <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#FAFAFA] to-transparent z-10" />
  <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#FAFAFA] to-transparent z-10" />

  <div className="flex w-max animate-marquee gap-6">
    {[...testimonials, ...testimonials].map((testimonial, index) =>
      renderCard(testimonial, index)
    )}
  </div>
</div>
      </div>
    </section>
  );
};

export default Testimonials;

type TestimonialItem = (typeof testimonialsData)[number];

const TestimonialCard = ({
  item,
  index,
}: {
  item: TestimonialItem;
  index: number;
}) => {
  return (
    <div
      className="
        relative 
        w-35 h-50 
        sm:w-45 sm:h-60 
        md:w-55 md:h-75
        rounded-2xl overflow-hidden shadow-lg 
        transition-all duration-500 ease-out 
        hover:-translate-y-4 hover:scale-105 hover:z-20 
        cursor-pointer
      "
      style={{
        rotate: `${index % 2 === 0 ? "-2deg" : "2deg"}`,
      }}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 pointer-events-auto"
      />

      <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-auto">
        <h4 className="text-xs sm:text-sm font-semibold text-white">
          {item.name}
        </h4>
        <p className="text-[10px] sm:text-xs text-white/80">{item.role}</p>
      </div>
    </div>
  );
};

const renderCard = (testimonial: Testimonial, index: number) => (
  <div
    key={index}
    className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shrink-0 w-87.5"
  >
    <div className="flex mb-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-transparent fill-[#737373]"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        ))}
    </div>
    <p className="text-neutral-700 text-sm mb-6">{testimonial.text}</p>
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-11 h-11 rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-neutral-800 text-sm">
          {testimonial.name}
        </p>
        <p className="text-neutral-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);
