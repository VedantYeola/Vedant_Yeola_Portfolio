
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const NavLink = ({ title, href, target }: { title: string; href: string; target?: string }) => (
  <a
    href={href}
    target={target}
    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 px-4 py-2"
  >
    {title}
  </a>
);

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 sm:p-6 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${isScrolled
              ? "bg-white/70 dark:bg-zinc-900/70 border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 w-full max-w-4xl"
              : "bg-transparent border-transparent w-full max-w-5xl"
            }`}
        >
          {/* Logo / Name */}
          <a href="#" className="text-zinc-900 dark:text-white font-semibold tracking-tight text-lg">
            VY<span className="text-zinc-400 dark:text-zinc-500">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink title="Skills" href="#skills" />
            <NavLink title="Projects" href="#projects" />
            <NavLink title="Education" href="#education" />
            <NavLink title="Achievements" href="#achievements" />
            <NavLink title="Resume" href="/Vedant_Yeola_Resume.pdf" target="_blank" />
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center gap-8 text-zinc-900 dark:text-white"
          >
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Projects</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Education</a>
            <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Achievements</a>
            <a href="/Vedant_Yeola_Resume.pdf" target="_blank" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium flex items-center gap-2">Resume <FileText size={24} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-full mt-4">Contact Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
