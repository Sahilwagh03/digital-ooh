import Image from "next/image";
import Logo from "./logo";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="relative w-full flex justify-center pt-6 px-3 sm:px-4 md:px-6 z-1000">
      <nav
        className="w-[95%] max-w-340 flex items-center justify-between px-3 py-3 
      rounded-2xl bg-black
      backdrop-blur-md"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-400 p-2 rounded-lg">
            <Logo className="w-6 h-6 text-white" />
          </div>

          <span className="text-white font-semibold text-lg tracking-tight">
            DigitalOOH
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300 font-medium">
          <Link href="/"  className="hover:text-white transition">Home</Link>
          <Link href="/"  className="hover:text-white transition">Features</Link>
          <Link  href="/" className="hover:text-white transition">Integration</Link>
          <Link href="/"  className="hover:text-white transition">How it Works</Link>
          <Link href="/"  className="hover:text-white transition">Testimonials</Link>
          <Link href="/"  className="hover:text-white transition">FAQ</Link>
        </div>

        {/* Button */}
        <div>
          <button
            className="px-5 py-2 rounded-lg 
          bg-white text-black font-medium 
          hover:bg-gray-200 transition"
          >
            Book a Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
