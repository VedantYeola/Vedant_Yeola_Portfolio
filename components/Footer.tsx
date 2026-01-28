import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-black border-t border-zinc-200 dark:border-zinc-900 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">

        <div className="flex gap-8 mb-8">
          <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="/Vedant_Yeola_Resume.pdf" target="_blank" rel="noreferrer" className="text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <FileText size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-zinc-500 text-xs">
            Designed & Built by Vedant Yeola.
          </p>
          <p className="text-zinc-500 dark:text-zinc-600 text-[10px]">
            © {new Date().getFullYear()} All rights reserved. <span className="mx-2">|</span> Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};
