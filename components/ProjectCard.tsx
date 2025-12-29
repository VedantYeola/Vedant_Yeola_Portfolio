
import React from 'react';
import { Project } from '../types';
import { AccentColor } from '../App';

interface ProjectCardProps {
  project: Project;
  accent: AccentColor;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, accent }) => {
  const accentClasses = {
    indigo: { text: 'text-indigo-600 dark:text-indigo-400', hover: 'hover:text-indigo-500 dark:hover:text-indigo-200', groupHover: 'group-hover:text-indigo-700 dark:group-hover:text-indigo-200', bgLight: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    emerald: { text: 'text-emerald-600 dark:text-emerald-400', hover: 'hover:text-emerald-500 dark:hover:text-emerald-200', groupHover: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-200', bgLight: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    rose: { text: 'text-rose-600 dark:text-rose-400', hover: 'hover:text-rose-500 dark:hover:text-rose-200', groupHover: 'group-hover:text-rose-700 dark:group-hover:text-rose-200', bgLight: 'bg-rose-500/10', border: 'border-rose-500/20' },
    cyan: { text: 'text-cyan-600 dark:text-cyan-400', hover: 'hover:text-cyan-500 dark:hover:text-cyan-200', groupHover: 'group-hover:text-cyan-700 dark:group-hover:text-cyan-200', bgLight: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    orange: { text: 'text-orange-600 dark:text-orange-400', hover: 'hover:text-orange-500 dark:hover:text-orange-200', groupHover: 'group-hover:text-orange-700 dark:group-hover:text-orange-200', bgLight: 'bg-orange-500/10', border: 'border-orange-500/20' }
  }[accent];

  return (
    <div className={`group relative transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border p-8 rounded-3xl bg-white dark:bg-slate-900/80 border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl dark:shadow-none hover:border-${accent}-500/50 backdrop-blur-xl hover:bg-slate-100/5 dark:hover:bg-slate-800/90`}>
      <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-30 transition-opacity">
        <svg className={`w-24 h-24 text-${accent}-500`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech, idx) => (
          <span key={idx} className={`px-3 py-1 ${accentClasses.bgLight} ${accentClasses.text} text-[10px] font-bold uppercase tracking-widest rounded-full border ${accentClasses.border}`}>
            {tech}
          </span>
        ))}
      </div>

      <h3 className={`text-2xl font-heading font-bold mb-3 transition-colors duration-300 ${accentClasses.text} ${accentClasses.hover}`}>
        {project.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-100 text-sm leading-relaxed mb-6 font-medium">
        {project.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="text-xs text-slate-500 dark:text-slate-300 font-medium">
          <p className={`font-semibold ${accentClasses.text}`}>{project.period}</p>
          <p>{project.location}</p>
        </div>
        <a 
          href={project.github}
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-sm font-bold ${accentClasses.text} flex items-center gap-2 group/link transition-colors duration-300 ${accentClasses.hover}`}
        >
          View Source 
          <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
