import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cloud, BrainCircuit, Zap } from 'lucide-react';

export const Inspiration = () => {
  return (
    <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden py-24 bg-zinc-50 dark:bg-black transition-colors duration-500">
      
      {/* Apple-style Multi-color Glow Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-400/5 dark:bg-rose-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md mb-12"
        >
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Innovation Mindset</span>
        </motion.div>

        {/* The Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            "Code is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">poetry</span>, and every <span className="italic">bug</span> is a lesson in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">disguise</span>."
          </h2>
        </motion.blockquote>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {[
            {
              icon: <BrainCircuit size={20} className="text-indigo-500" />,
              title: "AI & Machine Learning",
              desc: "Leveraging intelligent systems to solve complex problems and create innovative solutions that adapt and learn."
            },
            {
              icon: <Zap size={20} className="text-rose-500" />,
              title: "Full Stack Development",
              desc: "Building seamless experiences from database to interface, where every layer works in perfect harmony."
            },
            {
              icon: <Cloud size={20} className="text-cyan-500" />,
              title: "Cloud Architecture",
              desc: "Designing scalable, resilient systems that grow with demand and deliver reliability at every scale."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="p-6 rounded-3xl bg-white/20 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl hover:bg-white/40 dark:hover:bg-zinc-800/40 transition-all group"
            >
              <div className="mb-4 p-2 w-fit rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-sm font-medium text-zinc-400 dark:text-zinc-600 tracking-wide"
        >
          Building tomorrow's solutions with today's technology.
        </motion.p>
      </div>
    </section>
  );
};
