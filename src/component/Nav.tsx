import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Deep Stack Logo"
            className="w-30 h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          <li className="text-pink-500 font-medium cursor-pointer">
            Home
          </li>
          <li className="text-slate-600 cursor-pointer">
            Technologies
          </li>
          <li className="text-slate-600 cursor-pointer">
            Projects
          </li>
          <li className="text-slate-600 cursor-pointer">
            About
          </li>
          <li className="text-slate-600 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-slate-700 font-medium">
            Sign In
          </button>

          <button className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-slate-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-5">

          <ul className="flex flex-col gap-5">
            <li
              className="text-pink-500 font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>

            <li
              className="text-slate-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </li>

            <li
              className="text-slate-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </li>

            <li
              className="text-slate-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </li>

            <li
              className="text-slate-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">
            <button className="text-slate-700 font-medium">
              Sign In
            </button>

            <button className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;