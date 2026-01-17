
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
    const resumeLink = `${import.meta.env.BASE_URL}Vedant_Yeola_CV.pdf`;

    return (
        <footer className="bg-zinc-50 dark:bg-[#0F0A08]/50 border-t border-zinc-200 dark:border-zinc-800/50 py-12 transition-colors duration-500 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">

                <div className="flex gap-8 mb-8">
                    <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-300">
                        <Github size={20} />
                    </a>
                    <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors transform hover:scale-110 duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href={resumeLink} target="_blank" rel="noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-300">
                        <FileText size={20} />
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">
                        Designed & Built by Vedant Yeola.
                    </p>
                    <p className="text-zinc-400 dark:text-zinc-600 text-[10px]">
                        © {new Date().getFullYear()} All rights reserved. <span className="mx-2 text-zinc-300 dark:text-zinc-700">|</span> Pune, India
                    </p>
                </div>
            </div>
        </footer>
    );
};
