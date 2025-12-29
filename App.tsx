
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';
import ProjectCard from './components/ProjectCard';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EDUCATION, ACHIEVEMENTS } from './constants';

export type AccentColor = 'indigo' | 'emerald' | 'rose' | 'cyan' | 'orange';

const App: React.FC = () => {
  const isDarkMode = true; // Dark mode only

  const [accent, setAccent] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('accent');
    return (saved as AccentColor) || 'orange';
  });

  const [skillsVisible, setSkillsVisible] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('accent', accent);
  }, [accent]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === skillsRef.current) setSkillsVisible(true);
          if (entry.target === resumeRef.current) setResumeVisible(true);
          if (entry.target === contactRef.current) setContactVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (resumeRef.current) observer.observe(resumeRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);



  // Dynamic class helpers for theming and visibility
  const accentClasses = {
    indigo: {
      text: 'text-indigo-600 dark:text-indigo-400',
      hover: 'hover:text-indigo-500 dark:hover:text-indigo-200',
      groupHover: 'group-hover:text-indigo-700 dark:group-hover:text-indigo-200',
      bg: 'bg-indigo-600 hover:bg-indigo-500',
      border: 'border-indigo-500/20',
      glow: 'shadow-indigo-600/30 dark:shadow-indigo-600/20',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300',
      bgLight: 'bg-indigo-500/10'
    },
    emerald: {
      text: 'text-emerald-600 dark:text-emerald-400',
      hover: 'hover:text-emerald-500 dark:hover:text-emerald-200',
      groupHover: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-200',
      bg: 'bg-emerald-600 hover:bg-emerald-500',
      border: 'border-emerald-500/20',
      glow: 'shadow-emerald-600/30 dark:shadow-emerald-600/20',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300',
      bgLight: 'bg-emerald-500/10'
    },
    rose: {
      text: 'text-rose-600 dark:text-rose-400',
      hover: 'hover:text-rose-500 dark:hover:text-rose-200',
      groupHover: 'group-hover:text-rose-700 dark:group-hover:text-rose-200',
      bg: 'bg-rose-600 hover:bg-rose-500',
      border: 'border-rose-500/20',
      glow: 'shadow-rose-600/30 dark:shadow-rose-600/20',
      gradient: 'from-rose-600 via-orange-600 to-amber-600 dark:from-rose-300 dark:via-orange-300 dark:to-amber-300',
      bgLight: 'bg-rose-500/10'
    },
    cyan: {
      text: 'text-cyan-600 dark:text-cyan-400',
      hover: 'hover:text-cyan-500 dark:hover:text-cyan-200',
      groupHover: 'group-hover:text-cyan-700 dark:group-hover:text-cyan-200',
      bg: 'bg-cyan-600 hover:bg-cyan-500',
      border: 'border-cyan-500/20',
      glow: 'shadow-cyan-600/30 dark:shadow-cyan-600/20',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300',
      bgLight: 'bg-cyan-500/10'
    },
    orange: {
      text: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:text-orange-500 dark:hover:text-orange-200',
      groupHover: 'group-hover:text-orange-700 dark:group-hover:text-orange-200',
      bg: 'bg-orange-600 hover:bg-orange-500',
      border: 'border-orange-500/20',
      glow: 'shadow-orange-600/30 dark:shadow-orange-600/20',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-300 dark:via-amber-300 dark:to-yellow-300',
      bgLight: 'bg-orange-500/10'
    }
  }[accent];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-slate-400/30`}>
      <Navbar isDarkMode={isDarkMode} accent={accent} setAccent={setAccent} />
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <Scene3D isDarkMode={isDarkMode} accent={accent} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className={`inline-block px-4 py-2 ${accentClasses.bgLight} border ${accentClasses.border} rounded-full mb-8 backdrop-blur-md animate-pulse`}>
            <span className={`${accentClasses.text} font-bold text-xs tracking-widest uppercase`}>Available for New Projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-4 tracking-tight leading-none">
            Hi, I'm <span className={`bg-gradient-to-r ${accentClasses.gradient} text-transparent bg-clip-text`}>Vedant</span>
          </h1>
          
          <div className="mb-10">
            <h2 className="text-xl md:text-3xl font-heading font-medium text-slate-700 dark:text-slate-100 tracking-wide">
              Software Developer <span className="text-slate-300 dark:text-white/20 mx-2">|</span> Cloud & DevOps Enthusiast
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-200 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
            {PERSONAL_INFO.profile}
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 ${accentClasses.bg} text-white font-bold rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl ${accentClasses.glow}`}
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold rounded-2xl transition-all border border-slate-300 dark:border-white/10 backdrop-blur-md hover:border-slate-400 dark:hover:border-white/30 transform hover:scale-105"
              >
                Download Resume
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold rounded-2xl transition-all border border-slate-300 dark:border-white/10 backdrop-blur-md hover:border-slate-400 dark:hover:border-white/30 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-40">
        
        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="group cursor-default">
              <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 italic tracking-tighter ${accentClasses.text} transition-colors duration-300 ${accentClasses.hover}`}>Projects</h2>
              <div className={`h-1.5 w-24 bg-gradient-to-r ${accentClasses.gradient} rounded-full transition-all group-hover:w-48`}></div>
            </div>
            <p className="text-slate-600 dark:text-slate-100 max-w-md text-lg italic">
              {/* "Building the future with AI-driven solutions and robust architectures." */}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} accent={accent} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="scroll-mt-24">
          <div className="text-center mb-20 group cursor-default">
            <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${accentClasses.text} transition-colors duration-300 ${accentClasses.hover}`}>Technical Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-200 max-w-2xl mx-auto">Expertise spanning full-stack development, cloud infrastructure automation, and data engineering.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_GROUPS.map((group, groupIdx) => (
              <div 
                key={groupIdx} 
                className={`p-8 rounded-3xl transition-all duration-700 group ${isDarkMode ? 'bg-slate-900/80 border-white/10 border backdrop-blur-xl hover:bg-slate-800/90' : 'bg-white border-slate-200 border shadow-sm hover:shadow-xl'} hover:border-${accent}-500/50 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${groupIdx * 100}ms` }}
              >
                <h3 className={`${accentClasses.text} font-bold mb-8 text-sm uppercase tracking-widest`}>{group.category}</h3>
                <ul className="space-y-4">
                  {group.items.map((skill, itemIdx) => (
                    <li 
                      key={itemIdx} 
                      className={`flex items-center gap-3 text-slate-700 dark:text-slate-200 group/item transition-all duration-500 ease-out ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${(groupIdx * 150) + (itemIdx * 50)}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full opacity-60 bg-${accent}-500 group-hover/item:opacity-100 transition-opacity`}></div>
                      <span className={`transition-colors duration-300 font-medium text-slate-700 dark:text-slate-200 ${accentClasses.groupHover}`}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements Combined */}
        <section className="space-y-32">
          {/* Education Sub-section */}
          <div id="education" className="scroll-mt-24">
            <div className="group cursor-default mb-12 flex items-center gap-4">
              <h2 className={`text-4xl font-heading font-bold ${accentClasses.text} transition-colors duration-300 ${accentClasses.hover}`}>
                Education
              </h2>
              <span className={`h-px flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-white/10 group-hover:bg-white/30' : 'bg-slate-200 group-hover:bg-slate-400'}`}></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-500 group ${isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800/90 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-sm hover:shadow-lg'} hover:border-${accent}-500/20`}>
                  <span className={`text-xs font-bold ${accentClasses.text} uppercase tracking-widest block mb-3`}>{edu.period}</span>
                  <h4 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h4>
                  <p className={`mb-4 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{edu.institution} | {edu.location}</p>
                  <div className={`inline-block px-4 py-1.5 rounded-full ${accentClasses.bgLight} ${accentClasses.text} font-bold text-sm border border-${accent}-500/20`}>
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Sub-section */}
          <div id="achievements" className="scroll-mt-24">
            <div className="group cursor-default mb-12 flex items-center gap-4">
              <h2 className={`text-4xl font-heading font-bold ${accentClasses.text} transition-colors duration-300 ${accentClasses.hover}`}>
                Achievements
              </h2>
              <span className={`h-px flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-white/10 group-hover:bg-white/30' : 'bg-slate-200 group-hover:bg-slate-400'}`}></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className={`flex items-center gap-6 p-8 rounded-3xl border transition-all group ${isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800/90 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-sm hover:shadow-lg'} hover:border-${accent}-500/20`}>
                  <div className={`w-12 h-12 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <svg className={`w-6 h-6 ${accentClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 font-medium">{ach.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Section */}
          <div 
            id="resume"
            ref={resumeRef}
            className={`relative max-w-5xl mx-auto px-10 py-20 rounded-[3rem] transition-all duration-1000 transform scroll-mt-24 ${resumeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${isDarkMode ? `bg-slate-900/90 border-white/10 backdrop-blur-3xl border` : 'bg-white border-slate-200 border shadow-2xl'}`}
          >
            {/* Visual highlight element for better visibility */}
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accentClasses.gradient} opacity-[0.05] rounded-[3rem]`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] ${accentClasses.bgLight} opacity-30 rounded-full -z-10`}></div>
            
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-${accent}-500 rounded-full ${accentClasses.text} text-sm font-black uppercase tracking-[0.3em] shadow-xl`}>
              Resume / CV
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left flex-1">
                <h3 className={`text-4xl md:text-5xl font-heading font-black mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'} leading-tight`}>
                  Download My <span className={accentClasses.text}>Resume</span>
                </h3>
                <p className={`text-lg md:text-xl font-medium max-w-xl mb-0 leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>
                  Get a detailed overview of my professional experience, academic background, and technical proficiency in a clean PDF format.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                {/* Resume PDF located at: Vedant_Yeola_Resume.pdf */}
                <a 
                  href="/Vedant_Yeola_Resume.pdf"
                  download="Vedant_Yeola_Resume.pdf"
                  className={`group relative flex flex-col items-center justify-center gap-2 px-12 py-8 ${accentClasses.bg} text-white font-bold rounded-3xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl ${accentClasses.glow} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-2xl font-black tracking-tight">Download PDF</span>
                  <span className="text-xs opacity-80 font-medium uppercase tracking-widest">Version: March 2025</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-6 ${accentClasses.text} transition-colors duration-300 ${accentClasses.hover}`}>Get in Touch</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
              Open to collaborations and full-stack development opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className={`p-10 rounded-3xl border flex flex-col items-center gap-6 transition-all duration-500 group ${isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800/90' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className={`text-lg font-medium transition-colors ${accentClasses.groupHover}`}>{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <a 
              href={PERSONAL_INFO.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-10 rounded-3xl border flex flex-col items-center gap-6 transition-all duration-500 group ${isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800/90' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className={`text-lg font-medium transition-colors ${accentClasses.groupHover}`}>Vedant Yeola</p>
              </div>
            </a>

            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className={`p-10 rounded-3xl border flex flex-col items-center gap-6 transition-all duration-500 group ${isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800/90' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <p className={`text-lg font-medium transition-colors ${accentClasses.groupHover}`}>{PERSONAL_INFO.phone}</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Animated Wave Line */}
      <div className="py-12 overflow-hidden">
        <svg className="w-full h-12" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor={accent === 'indigo' ? '#4F46E5' : accent === 'emerald' ? '#10b981' : accent === 'rose' ? '#f43f5e' : accent === 'cyan' ? '#06b6d4' : '#f97316'} stopOpacity="0.6" />
              <stop offset="50%" stopColor={accent === 'indigo' ? '#9333EA' : accent === 'emerald' ? '#06B6D4' : accent === 'rose' ? '#F59E0B' : accent === 'cyan' ? '#4F46E5' : '#fbbf24'} stopOpacity="0.8" />
              <stop offset="80%" stopColor={accent === 'indigo' ? '#4F46E5' : accent === 'emerald' ? '#10b981' : accent === 'rose' ? '#f43f5e' : accent === 'cyan' ? '#06b6d4' : '#f97316'} stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path 
            d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30" 
            fill="none" 
            stroke="url(#waveGradient)" 
            strokeWidth="2"
            className="animate-pulse"
          />
          <path 
            d="M0,30 Q150,50 300,30 T600,30 T900,30 T1200,30" 
            fill="none" 
            stroke="url(#waveGradient)" 
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      </div>

      <footer className={`py-20 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        <p className="font-light tracking-wide italic">© {new Date().getFullYear()} Vedant Yeola </p>
      </footer>
    </div>
  );
};

export default App;
