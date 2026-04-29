"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-sm" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between">

          {/* Left - Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 group"
          >
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
          </button>

          {/* Center - Logo + Name */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <img src="/waddai-logo.png" alt="Waddai" className="h-12 w-auto" />
            <span className="text-xl font-bold tracking-tight text-gray-900">WADDAI</span>
          </Link>

          {/* Right - empty balance */}
          <div className="w-10" />
        </div>
      </header>

      {/* Full-width Slide-down Menu */}
      <div className={`fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-light py-3 border-b border-gray-50 hover:pl-4 transition-all duration-200 ${
                pathname === link.href ? "text-black font-semibold pl-4" : "text-gray-400 hover:text-black"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}