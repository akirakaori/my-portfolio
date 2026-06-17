"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

function getPreferredDarkMode() {
  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const applyTheme = (useDarkMode: boolean, persist = false) => {
    document.documentElement.classList.toggle("dark", useDarkMode);
    document.documentElement.style.colorScheme = useDarkMode ? "dark" : "light";

    if (persist) {
      window.localStorage.setItem("theme", useDarkMode ? "dark" : "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const useDarkMode = getPreferredDarkMode();
    setIsDarkMode(useDarkMode);
    applyTheme(useDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const nextTheme = !current;
      applyTheme(nextTheme, true);
      return nextTheme;
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Primary navigation"
      className={`fixed left-0 right-0 top-0 z-[100] pointer-events-auto border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/10 bg-[#F7F2E8]/90 text-black shadow-[0_14px_40px_rgba(183,146,93,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#030014]/75 dark:text-white dark:shadow-[0_14px_40px_rgba(2,6,23,0.28)]"
          : "border-black/10 bg-[#F7F2E8]/85 text-black backdrop-blur-xl dark:border-white/5 dark:bg-[#030014]/45 dark:text-white"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="/#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-black tracking-wide text-black sm:text-base dark:text-white"
        >
          <span className="bg-gradient-to-r from-[#D4B483] to-[#B7925D] bg-clip-text text-transparent dark:from-fuchsia-300 dark:via-violet-300 dark:to-sky-300">
            ASHIKA
          </span>{" "}
          KAMBANG
        </motion.a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs font-semibold text-black transition hover:text-[#6E5A48] dark:text-slate-300 dark:hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/65 text-black transition hover:border-black/35 hover:bg-[#F2E8D8]/90 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/65 text-black transition hover:border-black/35 hover:bg-[#F2E8D8]/90 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Toggle theme"
              aria-pressed={!isDarkMode}
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/70 bg-white/75 text-black transition hover:bg-[#F2E8D8]/90 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10"
            >
              {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/65 text-black md:hidden dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/10 bg-[#F7F2E8]/95 px-4 py-5 text-black backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#050117]/95 dark:text-white"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-black dark:text-slate-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-2 border-t border-black/10 pt-4 dark:border-white/10">
                <a href="https://github.com/" aria-label="GitHub profile" className="rounded-full border border-black/15 p-2 text-black dark:border-white/10 dark:text-white">
                  <FaGithub className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn profile" className="rounded-full border border-black/15 p-2 text-black dark:border-white/10 dark:text-white">
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  aria-label="Toggle theme"
                  aria-pressed={!isDarkMode}
                  onClick={toggleTheme}
                  className="rounded-full border border-black/70 p-2 text-black dark:border-white/10 dark:text-white"
                >
                  {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
