import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[2.5rem] bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
      />
      
      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <div className="relative p-8">
        {/* GitHub Icon with rotation effect */}
        <motion.div 
          className="absolute top-6 right-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-30 transition-opacity"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <svg className="w-20 h-20 text-zinc-500 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12" />
          </svg>
        </motion.div>

        {/* Tech Stack Tags with stagger animation */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.stack.map((tech, idx) => (
            <motion.span 
              key={idx} 
              className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700/50 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Title and Period */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>
          <motion.span 
            className="text-xs font-mono text-zinc-600 dark:text-zinc-400 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700/50 w-fit bg-zinc-50 dark:bg-zinc-800/30"
            whileHover={{ scale: 1.05 }}
          >
            {project.period}
          </motion.span>
        </div>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
          {project.description}
        </p>

        {/* Footer with location and link */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="capitalize">{project.location}</p>
          </div>
          <motion.div 
            className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            View Source
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
