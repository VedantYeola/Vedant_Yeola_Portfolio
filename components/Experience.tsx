import React from 'react';
import { motion } from 'framer-motion';
// import { EXPERIENCE } from '../constants'; // Temporarily commented out until constant is added

// Placeholder EXPERIENCE constant since it doesn't exist in constants.ts yet.
// In a real scenario, you should add this to your constants.ts file.
const EXPERIENCE = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Tech Solutions Inc.",
        location: "Pune, India",
        period: "2024 - Present",
        description: [
            "Developed and maintained scalable web applications using React and Node.js.",
            "Collaborated with cross-functional teams to define, design, and ship new features.",
            "Optimized application for maximum speed and scalability."
        ]
    },
    {
        id: 2,
        role: "Software Engineering Intern",
        company: "Innovative Startups",
        location: "Pune, India",
        period: "2023 - 2024",
        description: [
            "Assisted in the development of a cloud-based management platform.",
            "Implemented RESTful APIs and wrote comprehensive unit tests.",
            "Participated in code reviews and agile development processes."
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-16 tracking-tight"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative ml-3 md:ml-6 space-y-16">
                    {/* Continuous Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-0 top-2 w-px bg-gradient-to-b from-zinc-300 via-zinc-400 to-transparent dark:from-zinc-700 dark:via-zinc-800 dark:to-transparent"
                    />

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot with Monochrome Styling */}
                            <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: "spring" }}
                                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-700 group-hover:border-slate-500 dark:group-hover:border-white group-hover:scale-125 transition-all duration-300 z-10 shadow-sm"
                            />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300 tracking-tight">{exp.role}</h3>
                                <span className="text-sm font-mono text-zinc-500 bg-white dark:bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800/50 mt-2 sm:mt-0 w-fit shadow-sm dark:shadow-none">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-base text-zinc-500 dark:text-zinc-400 font-medium mb-6">{exp.company} | {exp.location}</div>

                            <ul className="space-y-4">
                                {exp.description.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                        className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-zinc-400 dark:before:bg-zinc-800 before:rounded-full group-hover:before:bg-slate-500 dark:group-hover:before:bg-white before:transition-colors before:duration-500"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
