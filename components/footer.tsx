import Link from "next/link";
import Logo from "./logo";

const footerLinks = {
  Menu: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Integration", href: "/integration" },
  ],
  "Follow Us": [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "About", href: "/about" },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] overflow-hidden">
      <div className="relative z-10 px-6 pt-16 pb-5 lg:pb-10 max-w-340 mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row gap-12 justify-between lg:gap-8">
            <div className="lg:w-64 shrink-0 flex-2">
              <div className="flex items-center gap-2">
                <div className="bg-orange-400 p-2 rounded-lg">
                  <Logo className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-2xl tracking-tight">
                  DigitalOOH
                </span>
              </div>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-xs">
                DigitalOOH is an all-in-one platform that simplifies
                multi-channel out-of-home advertising management.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                    {category}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[#888888] text-sm hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[#222222]" />

          <div className="mt-6 text-center">
            <p className="text-[#555555] text-sm">
              © DigitalOOH 2025 – All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="relative select-none pointer-events-none overflow-hidden h-16 md:h-48">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#1c1c1c] font-black uppercase whitespace-nowrap text-[clamp(40px,17vw,232px)] leading-[0.85] tracking-[-0.04em]">
          DIGITALOOH
        </span>
      </div>
    </footer>
  );
}
