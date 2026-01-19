"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md border-slate-800/80 shadow-lg shadow-slate-900/70"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-14 w-20 sm:h-20 sm:w-44">
                <Image
                  src="/Artboard2.svg"
                  alt="Gleam Digital Technologies logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center space-x-6 lg:space-x-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-1 py-2 text-sm font-medium transition-all duration-200 group ${
                      scrolled ? "text-slate-200" : "text-slate-100"
                    } hover:text-blue-200`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-300 transition-all duration-200 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              {!isOpen && (
                <button
                  onClick={openMenu}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    scrolled
                      ? "text-slate-200 hover:text-white"
                      : "text-white hover:text-blue-100"
                  }`}
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Slide-in Panel */}
          <div className="absolute top-0 left-0 h-full w-4/5 xs:w-3/5 sm:w-2/5 bg-slate-950 border-r border-slate-800 shadow-2xl shadow-black/60 transform transition-transform duration-300 ease-out translate-x-0">
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="relative h-14 w-20 sm:h-20 sm:w-44">
                  <Image
                    src="/Artboard2.svg"
                    alt="Gleam Digital Technologies logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-4 sm:px-6 py-6 sm:py-8">
              <nav className="space-y-1 sm:space-y-2">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-3 sm:px-4 py-3 text-sm sm:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition-all duration-200"
                    style={{
                      transitionDelay: `${(index + 1) * 40}ms`,
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-[11px] sm:text-xs font-semibold text-slate-400 mb-3 uppercase tracking-[0.2em]">
                  Get in touch
                </h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>hello@digitaltechnologies.dev</p>
                  <p>Remote-first · Serving clients worldwide</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-[11px] sm:text-xs font-semibold text-slate-400 mb-3 uppercase tracking-[0.2em]">
                  Connect
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-300 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-300 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-300 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
