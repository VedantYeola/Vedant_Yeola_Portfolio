import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Scene } from './components/Scene';
import ProjectCard from './components/ProjectCard';
import { Achievements } from './components/Achievements';
import { Inspiration } from './components/Inspiration';
import { Footer } from './components/Footer';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EDUCATION } from './constants';
import {
  SiPython, SiGo, SiJavascript, SiTypescript,
  SiAmazonwebservices, SiDocker, SiJenkins, SiKubernetes, SiAnsible, SiTerraform, SiSonarqube,
  SiPostgresql, SiMongodb, SiFirebase,
  SiReact, SiNextdotjs, SiStreamlit, SiFastapi, SiMlflow, SiLatex, SiSlack
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

export type AccentColor = 'blue';

// Skill Icons Mapping
const skillIcons: Record<string, { icon: React.ElementType, color: string }> = {
  "Python": { icon: SiPython, color: "#3776AB" },
  "Golang": { icon: SiGo, color: "#00ADD8" },
  "Javascript": { icon: SiJavascript, color: "#F7DF1E" },
  "Typescript": { icon: SiTypescript, color: "#3178C6" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Jenkins": { icon: SiJenkins, color: "#D24939" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Ansible": { icon: SiAnsible, color: "#EE0000" },
  "Terraform(IAC)": { icon: SiTerraform, color: "#7B42BC" },
  "SonarQube": { icon: SiSonarqube, color: "#4E9BCD" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Neon Tech": { icon: FaDatabase, color: "#00E599" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Streamlit": { icon: SiStreamlit, color: "#FF4B4B" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "MLflow": { icon: SiMlflow, color: "#0194E2" },
  "Latex": { icon: SiLatex, color: "#008080" },
  "Slack": { icon: SiSlack, color: "#4A154B" }
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Apply theme class to html element
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Dynamic class helpers for theming
  const accentClasses = {
    blue: {
      text: 'text-zinc-900 dark:text-white',
      hover: 'hover:text-zinc-600 dark:hover:text-zinc-300',
      groupHover: 'group-hover:text-zinc-800 dark:group-hover:text-white',
      bg: 'bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black',
      border: 'border-zinc-200 dark:border-white/20',
      glow: 'shadow-zinc-500/20 dark:shadow-white/10',
      gradient: 'from-zinc-700 via-zinc-500 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400',
      bgLight: 'bg-zinc-100 dark:bg-white/10'
    }
  }['blue'];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-indigo-500/30 transition-colors duration-500">
      <Scene theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20 group cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">Technical Arsenal</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                A comprehensive toolkit for building scalable, high-performance applications.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILL_GROUPS.map((group, groupIdx) => (
                <motion.div
                  key={groupIdx}
                  className="p-8 rounded-[2rem] transition-all duration-500 group bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className={`font-bold text-sm uppercase tracking-wider ${
                      group.category === 'Languages' ? 'text-indigo-600 dark:text-indigo-400' :
                      group.category === 'Cloud & DevOps' ? 'text-purple-600 dark:text-purple-400' :
                      group.category === 'Databases' ? 'text-blue-600 dark:text-blue-400' :
                      'text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {group.items.map((skill, itemIdx) => {
                      const skillData = skillIcons[skill];
                      const Icon = skillData?.icon;

                      return (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 hover:translate-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 p-1.5 transition-colors group-hover:bg-white dark:group-hover:bg-zinc-700">
                            {Icon ? (
                              React.createElement(Icon as any, {
                                className: "w-full h-full",
                                style: { color: skillData.color }
                              })
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 opacity-60"></div>
                            )}
                          </div>
                          <span className="font-medium">{skill}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="group cursor-default">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Projects</h2>
                  <div className={`h-1.5 w-24 bg-gradient-to-r ${accentClasses.gradient} rounded-full transition-all group-hover:w-48`}></div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-lg font-medium">
                  Showcasing innovation through code.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="group cursor-default mb-12 flex items-center gap-4">
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Education
                </h2>
                <span className="h-px flex-1 transition-colors duration-300 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700"></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative p-8 rounded-[2rem] border transition-all duration-500 group bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md">
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3 opacity-60">{edu.period}</span>
                    <h4 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{edu.degree}</h4>
                    <p className="mb-4 font-medium text-zinc-600 dark:text-zinc-400">{edu.institution} | {edu.location}</p>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider border border-zinc-200 dark:border-white/10">
                      {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <Achievements />

        {/* Inspiration Section */}
        <Inspiration />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-zinc-900 dark:text-white">Let's Connect</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-xl">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-10 rounded-[2.5rem] border flex flex-col items-center gap-6 transition-all duration-500 group bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md"
                >
                  <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Email</p>
                    <p className="text-lg font-medium transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-10 rounded-[2.5rem] border flex flex-col items-center gap-6 transition-all duration-500 group bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md"
                >
                  <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">LinkedIn</p>
                    <p className="text-lg font-medium transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Vedant Yeola</p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-10 rounded-[2.5rem] border flex flex-col items-center gap-6 transition-all duration-500 group bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md"
                >
                  <div className={`w-16 h-16 rounded-2xl ${accentClasses.bgLight} flex items-center justify-center ${accentClasses.text} group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Phone</p>
                    <p className="text-lg font-medium transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
