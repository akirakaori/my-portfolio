"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaBolt, FaCode, FaPalette, FaUser } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="text-purple-400" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code is my top priority.",
  },
  {
    icon: <FaPalette className="text-blue-400" />,
    title: "Modern Design",
    description: "Creating visually appealing interfaces with a focus on user experience.",
  },
  {
    icon: <FaBolt className="text-purple-400" />,
    title: "Fast Performance",
    description: "Optimizing applications for maximum speed and responsiveness.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="container-shell">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400">
              <FaUser size={16} /> About Me
            </div>
            <h2 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
              Passionate Developer <br />
              <span className="gradient-text">Crafting Digital Future</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              I am a Computer Science student with a deep passion for building software that
              solves real-world problems. My journey in tech started with a curiosity for how
              things work, which evolved into a career in full-stack development.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-gray-400">
              I thrive in collaborative environments and love tackling complex challenges. When
              I&apos;m not coding, you can find me exploring new technologies or contributing to
              open-source projects.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card rounded-2xl p-4">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="mb-1 font-bold">{feature.title}</h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-border aspect-square overflow-hidden rounded-3xl">
              <div className="gradient-border-content overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/developer/800/800"
                  alt="Developer"
                  width={800}
                  height={800}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="glass-card absolute -bottom-6 -left-6 rounded-2xl p-6"
            >
              <div className="gradient-text text-3xl font-bold">3+</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">Years Exp.</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="glass-card absolute -top-6 -right-6 rounded-2xl p-6"
            >
              <div className="gradient-text text-3xl font-bold">20+</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">Projects Done</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
