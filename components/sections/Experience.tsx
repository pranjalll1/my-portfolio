"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-dark-surface/20" variant="slideRight">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Training</span>
          <h2 className="section-heading gradient-text mt-2">Training & Development</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-base">
            Hands-on learning in version control, CI/CD, containerization, and automated deployment.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl border border-white/10 p-6 sm:p-8 gpu-boost"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">DevOps Fundamentals: Building Skills from Code to Deployment</h3>
              <p className="text-indigo-300 mt-1 text-sm sm:text-base">Lovely Professional University · Centre for Professional Enhancement</p>
              <p className="text-gray-400 text-sm mt-1">Skill Development Course</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-gray-300 font-medium">Aug 2026</p>
              <p className="text-xs text-gray-500">Certificate of Merit</p>
            </div>
          </div>

          <div className="space-y-3 text-gray-300 text-sm leading-7">
            <p>
              Completed the DevOps Fundamentals skill development course organized by the Centre for Professional Enhancement, Lovely Professional University, from 8 June 2026 to 15 July 2026.
            </p>
            <p>
              Worked with Git, GitHub, Docker, Jenkins, and Maven to manage, build, test, and deploy applications.
            </p>
            <p>
              Built and containerized a Spring Boot application using Docker Compose, and configured a multi-stage Jenkins pipeline triggered by GitHub webhooks.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-500/30 bg-cyan-500/10">DevOps · CI/CD</span>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-3">Certificate Preview</p>
            <a
              href="https://drive.google.com/file/d/1CYGMibhH9MaLtiN-MZpvNlQgr7b1vwa_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 hover:border-indigo-400/40 transition-colors"
            >
              <div className="relative w-full h-52 sm:h-64 bg-black/20">
                <Image
                  src="/certificates/lpu-devops.png"
                  alt="Pranjal Soni — DevOps Fundamentals Certificate of Merit"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </motion.article>
      </div>
    </SectionWrapper>
  );
}
