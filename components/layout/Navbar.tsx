"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-300">
          <div className={cn(
            "w-full h-full glass-panel border-b border-t-0 border-x-0 transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )} />
        </div>

        <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-heading font-bold text-xl tracking-tighter text-white hover:text-cyber-cyan transition-colors group">
            SW<span className="text-cyber-cyan group-hover:animate-pulse">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative font-mono text-sm transition-colors duration-300",
                    isActive ? "text-cyber-cyan" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyber-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]"
                    />
                  )}
                </a>
              );
            })}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-cyber-cyan/50 text-cyber-cyan text-sm font-mono hover:bg-cyber-cyan/10 transition-colors relative group"
            >
              CV
              <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyber-cyan group-hover:scale-150 transition-transform" />
              <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyber-cyan group-hover:scale-150 transition-transform" />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-cyber-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-heading tracking-widest text-white hover:text-cyber-cyan"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 border border-cyber-cyan text-cyber-cyan font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
