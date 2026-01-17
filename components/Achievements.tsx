import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../constants';
import { Trophy, Medal, Star, Award as AwardIcon, ExternalLink, ShieldCheck } from 'lucide-react';

const AchievementCard = ({ award, index }: { award: any; index: number }) => {
  const isBadge = award.rank === 'Badge';
  const isCertificate = award.rank === 'Certificate';
  const rankNumber = parseInt(award.rank);
  
  const getIcon = () => {
    if (isBadge) return <ShieldCheck size={28} />;
    if (isCertificate) return <AwardIcon size={28} />;
    if (rankNumber < 200) return <Trophy size={28} />;
    return <Medal size={28} />;
  };

  const getAccentColor = () => {
    if (isBadge) return "text-orange-600 dark:text-orange-400 bg-orange-100/50 dark:bg-orange-900/20 border-orange-200/50 dark:border-orange-800/50";
    if (isCertificate) return "text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/20 border-emerald-200/50 dark:border-emerald-800/50";
    return "text-amber-600 dark:text-amber-500 bg-amber-100/50 dark:bg-amber-900/20 border-amber-200/50 dark:border-amber-800/50";
  };

  const getGradient = () => {
    if (isBadge) return "from-orange-500/20 to-amber-600/20";
    if (isCertificate) return "from-emerald-500/20 to-green-600/20";
    return "from-yellow-500/20 to-amber-600/20";
  };

  const getLabel = () => {
    if (isBadge) return 'Badge';
    if (isCertificate) return 'Certificate';
    return 'Global';
  };

  const getMilestoneText = () => {
    if (isBadge) return 'Certification Milestone';
    if (isCertificate) return 'Professional Training';
    return 'Competition Milestone';
  };

  const getStarColor = () => {
    if (isBadge) return "text-orange-500 fill-orange-500";
    if (isCertificate) return "text-emerald-500 fill-emerald-500";
    return "text-amber-500 fill-amber-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${getGradient()} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
      <div className={`relative bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl p-8 rounded-3xl h-full flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500`}>
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-2xl transition-transform duration-500 group-hover:scale-110 ${getAccentColor().split(' ').slice(0, 3).join(' ')}`}>
              {getIcon()}
            </div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full">
              {award.year}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
                {(isBadge || isCertificate) ? '' : '#'}{(isBadge || isCertificate) ? '' : award.rank}
              </span>
              <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                {getLabel()}
              </span>
            </div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 leading-tight break-words">
              {award.event}
            </h3>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">
            {getMilestoneText()}
          </span>
          <Star size={14} className={getStarColor()} />
        </div>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-950/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/50 text-amber-700 dark:text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <AwardIcon size={12} />
            Milestones & Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4"
          >
            Major Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl"
          >
            A track record of problem-solving excellence and continuous learning in modern cloud architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award, index) => (
            <AchievementCard key={index} award={award} index={index} />
          ))}
        </div>
        
        {/* Additional Context Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-3xl bg-zinc-900 text-white dark:bg-white dark:text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/20"
        >
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">Technical Foundations</h4>
            <p className="text-zinc-400 dark:text-zinc-500 text-sm leading-relaxed">
              From professional certifications to continuous learning programs, these milestones reflect my commitment to engineering precision and keeping pace with industry innovations.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
             <a 
              href="https://www.credly.com/users/vedant-yeola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-800 dark:bg-zinc-100 rounded-2xl flex items-center gap-2 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm font-semibold"
             >
               Credly Badges <ExternalLink size={14} />
             </a>
             <a 
              href="https://www.linkedin.com/in/Vedant-Yeola-b477b8268" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-2xl flex items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-semibold border border-blue-400/20"
             >
               View Credentials <ExternalLink size={14} />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
