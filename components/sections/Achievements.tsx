"use client";
import { motion } from "framer-motion";
import achievementsData from "@/data/achievements.json";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-dark-surface/30 py-20" variant="slideLeft">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">Milestones</span>
          <h2 className="section-heading gradient-text mt-2">Achievements & Contributions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-base">Selected milestones and contributions from my learning journey.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievementsData.achievements.map((item, i) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl border border-white/10 p-6 hover:border-indigo-400/40 transition-colors">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-300">{item.category}</span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-6">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
