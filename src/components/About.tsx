"use client";

import { motion } from "motion/react";
import {
  FaDatabase,
  FaServer,
  FaRocket,
  FaGraduationCap,
  FaLayerGroup,
  FaMusic,
  FaUtensils,
  FaHeart,
} from "react-icons/fa";

const stats = [
  { value: "10+", label: "Projects Developed" },
  { value: "2+", label: "Years of Development Experience" },
  { value: "10+", label: "Technologies & Frameworks" },
  { value: "1+", label: "Industry Experience" },
];

const focusAreas = [
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    text: "Building scalable APIs, server-side logic, authentication, and reliable backend systems.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    text: "Working with relational and NoSQL databases including PostgreSQL, MySQL, MongoDB, and Oracle.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full-Stack Development",
    text: "Developing complete applications using React, Next.js, ASP.NET Core, Node.js, and modern tools.",
  },
  {
    icon: <FaRocket />,
    title: "AI-Powered Solutions",
    text: "Exploring Artificial Intelligence, Machine Learning, recommendation systems, and intelligent applicationsthat solve real-world problems.",
  },
];

const hobbies = [
  {
    icon: <FaMusic />,
    title: "Singing",
  },
  {
    icon: <FaHeart />,
    title: "Dancing",
  },
  {
    icon: <FaUtensils />,
    title: "Food Hunting",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F2E8] py-28 text-[#3D2C1F] dark:bg-[#0b0b0f] dark:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,180,131,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(184,146,93,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(120deg,transparent_0%,transparent_45%,#B7925D_46%,#B7925D_47%,transparent_48%,transparent_100%)] dark:opacity-[0.04] dark:bg-[linear-gradient(120deg,transparent_0%,transparent_45%,white_46%,white_47%,transparent_48%,transparent_100%)]" />

      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#6E5A48] dark:text-purple-300">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
  Software Engineer{" "}
  <span className="gradient-text">Building Intelligent Applications</span>
</h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6E5A48] dark:text-gray-400">
  I am a Software Engineer passionate about designing scalable backend
  systems, building modern full-stack applications, and developing
  intelligent software solutions that solve real-world problems.
</p>

<p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6E5A48] dark:text-gray-400">
  My experience spans enterprise banking systems, healthcare platforms,
  vehicle management applications, educational systems, career intelligence
  solutions, and data-driven analytics projects. Alongside software
  engineering, I am actively expanding my expertise in Artificial
  Intelligence, Machine Learning, cloud technologies, and software
  architecture.
</p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-3xl border border-[#B7925D]/20 bg-white/55 p-6 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#F2E8D8]/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
            >
              <div className="gradient-text text-4xl font-bold">
                {item.value}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-[#6E5A48] dark:text-gray-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-[#B7925D]/20 bg-white/55 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B7925D]/15 text-2xl text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300">
              <FaGraduationCap />
            </div>

            <h3 className="mb-5 text-3xl font-bold">My Journey</h3>

            <p className="leading-8 text-[#6E5A48] dark:text-gray-400">
              My journey has been driven by a curiosity for understanding how modern applications and systems are designed, built, and scaled. I enjoy working with backend services, APIs, databases, authentication systems, and application architecture.

Over time, I have developed projects across banking, healthcare, vehicle management, career intelligence, education, and analytics domains. I am continuously learning and building while expanding my knowledge in Artificial Intelligence, Machine Learning, cloud technologies, and scalable software systems.
            </p>

           <p className="mt-5 leading-8 text-[#6E5A48] dark:text-gray-400">
  I have developed projects across banking, healthcare, vehicle management,
  career intelligence, education, cinema operations, and data analytics,
  combining backend, full-stack, and AI-focused ideas to solve practical
  problems.
</p>

            <div className="mt-8 rounded-2xl border border-[#B7925D]/20 bg-[#F2E8D8]/70 p-5 dark:border-white/10 dark:bg-black/30">
              <p className="text-sm uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
                Current Focus
              </p>
              <p className="mt-3 leading-7 text-[#3D2C1F] dark:text-gray-300">
                Building production-ready applications, strengthening backend
                engineering skills, and exploring AI-powered solutions.
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-[#B7925D]/20 bg-[#F2E8D8]/70 p-5 dark:border-white/10 dark:bg-black/30">
              <p className="text-sm uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
                Beyond Coding
              </p>

              <p className="mt-3 leading-7 text-[#3D2C1F] dark:text-gray-300">
                Outside of development, I enjoy creative and expressive moments
                through music, movement, and discovering beautiful food spots.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {hobbies.map((item) => (
                  <span
                    key={item.title}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#B7925D]/25 bg-[#B7925D]/10 px-4 py-2 text-sm font-medium text-[#6E5A48] dark:border-purple-400/25 dark:bg-purple-500/10 dark:text-purple-200"
                  >
                    <span className="text-[#6E5A48] dark:text-purple-300">{item.icon}</span>
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#B7925D]/20 bg-white/55 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-[#F2E8D8]/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B7925D]/15 text-xl text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300">
                  {item.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                <p className="leading-relaxed text-[#6E5A48] dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
