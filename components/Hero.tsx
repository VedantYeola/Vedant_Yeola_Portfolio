import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md text-[11px] font-medium text-zinc-600 dark:text-zinc-300 tracking-wide uppercase shadow-lg shadow-black/5 dark:shadow-black/20 animate-pulse">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-bold">
              Available for new Project
            </span>
          </span>
        </motion.div>

        {/* Main Title - Apple Style Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-white dark:to-white/40 mb-8 drop-shadow-2xl"
        >
          Vedant Yeola
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed tracking-tight"
        >
          Software Developer | Cloud & DevOps Enthusiast <br className="hidden md:block" />
          
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="/Vedant_Yeola_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/10 dark:shadow-white/10"
          >
            Download Resume <FileDown size={16} />
          </a>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/50 flex items-center gap-2"
          >
            Connect <ArrowRight size={16} />
          </a>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/50"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
