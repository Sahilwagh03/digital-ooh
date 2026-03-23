"use client";

import Image from "next/image";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";

const testimonialsData = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Media Owner",
    company: "AdVision",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Marketing Head",
    company: "GrowthX",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Founder",
    company: "LeadBoost",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Digital Strategist",
    company: "MarketEdge",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Arjun Patel",
    role: "Growth Manager",
    company: "ScaleHub",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Neha Singh",
    role: "CMO",
    company: "BrandSprint",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-8 lg:py-14 overflow-hidden">
      {/* Background */}
      <InteractiveGridPattern
        width={70}
        height={70}
        squares={[100, 100]}
        squaresClassName="fill-white dark:fill-neutral-800 stroke-gray-400/10 dark:stroke-gray-400/5"
        className="absolute inset-0 w-full h-full z-0 border-0"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 z-10">
        {/* Heading */}
        <div className="flex flex-col gap-4 text-center items-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-xl">
            Trusted by <span className="text-orange-400">Leading</span> Media
            Owners Worldwide
          </h2>

          <p className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 max-w-sm lg:max-w-md">
            Join hundreds achieving 10X growth through digital transformation
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="flex items-center overflow-x-auto sm:overflow-visible px-2 sm:px-0 scrollbar-hide">
            {testimonialsData.map((item, index) => (
              <div
                key={item.id}
                className={`group shrink-0 ${
                  index !== 0 ? "-ml-4 sm:-ml-6 md:-ml-8" : ""
                }`}
              >
                <TestimonialCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({
  item,
  index,
}: {
  item: (typeof testimonialsData)[number];
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
      {/* Image */}
      <Image
        src={item.image}
        alt={`${item.name} – ${item.role} at ${item.company}`}
        fill
        sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-linear-to-t from-black/70 via-black/40 to-transparent">
        <h4 className="text-xs sm:text-sm font-semibold text-white">
          {item.name}
        </h4>
        <p className="text-[10px] sm:text-xs text-white/80">
          {item.role}
        </p>
      </div>
    </div>
  );
};