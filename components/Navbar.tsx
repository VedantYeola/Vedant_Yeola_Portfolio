
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { AccentColor } from '../App';

const Logo = ({ accent }: { accent: AccentColor }) => {
  const gradColors = {
    indigo: { start: '#4F46E5', end: '#9333EA' },
    emerald: { start: '#059669', end: '#06B6D4' },
    rose: { start: '#E11D48', end: '#F59E0B' },
    cyan: { start: '#0891B2', end: '#4F46E5' },
    orange: { start: '#f97316', end: '#fbbf24' }
  }[accent];

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
      <rect width="40" height="40" rx="12" fill="url(#logo-grad)" />
      <path d="M10 14L20 30L30 14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradColors.start} />
          <stop offset="1" stopColor={gradColors.end} />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, accent, setAccent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const accents: AccentColor[] = ['indigo', 'emerald', 'rose', 'cyan', 'orange'];
  
  const accentTextClass = {
    indigo: 'text-indigo-600 dark:text-indigo-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    rose: 'text-rose-600 dark:text-rose-400',
    cyan: 'text-cyan-600 dark:text-cyan-400',
    orange: 'text-orange-600 dark:text-orange-400'
  }[accent];

  const accentBgClass = {
    indigo: 'bg-indigo-600 hover:bg-indigo-500',
    emerald: 'bg-emerald-600 hover:bg-emerald-500',
    rose: 'bg-rose-600 hover:bg-rose-500',
    cyan: 'bg-cyan-600 hover:bg-cyan-500',
    orange: 'bg-orange-600 hover:bg-orange-500'
  }[accent];

  const navItems = [
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${isDarkMode ? 'bg-slate-950/80 border-white/5' : 'bg-slate-50/80 border-slate-200 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-3">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo accent={accent} />
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-lg tracking-tight leading-none transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Vedant Yeola</span>
            <span className={`text-[10px] ${accentTextClass} font-bold uppercase tracking-widest mt-1`}>Software Developer</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-bold">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)} 
              className={`transition-all relative group ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${accentBgClass.split(' ')[0]}`}></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block"></div>

          {/* Accent Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/50 dark:bg-white/5 rounded-full border border-slate-300/30 dark:border-white/5">
            {accents.map((a) => (
              <button
                key={a}
                onClick={() => setAccent(a)}
                className={`w-5 h-5 rounded-full transition-all transform hover:scale-125 ${a === accent ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-950 scale-110' : 'opacity-40 hover:opacity-100'} 
                ${a === 'indigo' ? 'bg-indigo-500' : a === 'emerald' ? 'bg-emerald-500' : a === 'rose' ? 'bg-rose-500' : a === 'cyan' ? 'bg-cyan-500' : 'bg-orange-500'}`}
                title={`${a.charAt(0).toUpperCase() + a.slice(1)}`}
              />
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900 text-yellow-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 lg:hidden rounded-xl transition-all ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-900'}`}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>

          {/* Connect Button with Animated Dropdown */}
          <div className="hidden sm:block relative group">
            <button 
              className={`${accentBgClass} text-white px-5 py-2 rounded-xl transition-all shadow-lg active:scale-95 font-bold flex items-center gap-2`}
            >
              Connect
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Animated Dropdown */}
            <div className="absolute right-0 mt-3 w-56 transition-all duration-300 ease-out origin-top-right opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              <div className={`rounded-2xl overflow-hidden shadow-2xl border backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-slate-200'}`}>
                {/* GitHub Link */}
                <a 
                  href={PERSONAL_INFO.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 transition-all duration-300 group/item ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>GitHub</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>View my projects</p>
                  </div>
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover/item:translate-x-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                {/* Divider */}
                <div className={`h-px ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                
                {/* LinkedIn Link */}
                <a 
                  href={PERSONAL_INFO.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 transition-all duration-300 group/item ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:-rotate-6 bg-[#0A66C2]`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Let's connect</p>
                  </div>
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover/item:translate-x-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0'} ${isDarkMode ? 'border-white/5 bg-slate-950/95' : 'border-slate-200 bg-slate-50/95'}`}>
        <div className="px-6 py-8 flex flex-col gap-5 text-lg font-bold">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)} 
              className={`text-left py-2 transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {item.name}
            </button>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a 
              href={PERSONAL_INFO.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center gap-3 ${accentBgClass} text-white py-4 rounded-2xl font-bold`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href={PERSONAL_INFO.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white py-4 rounded-2xl font-bold transition-colors`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
