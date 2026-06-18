"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Database,
  Server,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7F2E8] px-6 pt-36 pb-20 text-[#3D2C1F] dark:bg-[#050014] dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-20 h-96 w-96 rounded-full bg-[#D4B483]/25 blur-[130px] dark:bg-purple-600/25" />
        <div className="absolute right-[-10%] bottom-10 h-[30rem] w-[30rem] rounded-full bg-[#B7925D]/20 blur-[130px] dark:bg-blue-600/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(183,146,93,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(183,146,93,0.08)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] dark:opacity-60" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B7925D]/20 bg-white/55 px-4 py-2 text-xs font-semibold text-[#6E5A48] backdrop-blur-xl dark:border-white/15 dark:bg-white/[0.06] dark:text-purple-100">
            <Sparkles size={14} className="text-[#6E5A48] dark:text-purple-300" />
            Open to Junior Roles & Internship Opportunities
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
            Building{" "}
            <span className="gradient-text">Scalable</span>
            <br />
            Software Solutions
          </h1>

          <p className="mt-7 text-xl font-semibold text-[#6E5A48] dark:text-purple-200">
            Software Engineer | Backend, Full-Stack & AI Applications
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6E5A48] dark:text-gray-400">
           I build scalable software systems, modern web applications, intelligent platforms, and secure backend services using React, Node.js, Python, ASP.NET Core, Java, PostgreSQL, and cloud technologies.

Passionate about software architecture, system design, backend engineering, and applying Artificial Intelligence to solve real-world problems.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#B7925D]/20 bg-white/55 px-6 text-sm font-bold text-[#3D2C1F] transition hover:bg-[#F2E8D8] dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="/cv/Ashika-Kambang-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4B483] to-[#B7925D] px-6 text-sm font-bold text-[#3D2C1F] shadow-[0_0_30px_rgba(183,146,93,0.28)] transition hover:from-[#B7925D] hover:to-[#9C7645] hover:text-white active:scale-[0.98] dark:from-purple-600 dark:to-blue-600 dark:text-white dark:shadow-[0_0_30px_rgba(124,58,237,0.35)] dark:hover:opacity-90"
            >
              Download Resume <Download size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#B7925D]/20 bg-white/55 px-6 text-sm font-bold text-[#3D2C1F] transition hover:bg-[#F2E8D8] dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
            >
              Contact Me <Mail size={16} />
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 overflow-hidden rounded-3xl border border-[#B7925D]/20 bg-white/55 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-5 text-center ${
                  index !== 0 ? "border-l border-[#B7925D]/20 dark:border-white/10" : ""
                }`}
              >
                <div className="gradient-text text-3xl font-black">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-[#6E5A48] dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#D4B483]/35 via-[#B7925D]/15 to-[#F2E8D8]/25 blur-3xl dark:from-purple-500/30 dark:via-violet-500/10 dark:to-blue-500/20" />

          <div className="relative rounded-[2.5rem] border border-[#B7925D]/20 bg-white/55 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <div className="relative h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F2E8D8] to-[#B7925D]/30 dark:from-purple-950 dark:to-slate-950">
              <Image
                src="/profile.jpg"
                alt="Ashika Kambang"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C1F]/20 via-transparent to-transparent dark:from-[#050014]/45" />
            </div>
          </div>

          <div className="absolute -left-6 top-16 rounded-2xl border border-[#B7925D]/20 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7925D]/15 text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300">
              <Server size={18} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
              Focus
            </p>
            <p className="mt-1 text-sm font-bold text-[#3D2C1F] dark:text-white">
              Software Engineering
            </p>
          </div>

          <div className="absolute -right-5 bottom-24 rounded-2xl border border-[#B7925D]/20 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7925D]/15 text-[#6E5A48] dark:bg-blue-500/15 dark:text-blue-300">
              <Database size={18} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
              Building
            </p>
            <p className="mt-1 text-sm font-bold text-[#3D2C1F] dark:text-white">Backend Systems</p>
          </div>

          <div className="absolute left-1/2 top-[-22px] -translate-x-1/2 rounded-2xl border border-[#B7925D]/20 bg-white/70 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
            <div className="flex items-center gap-2 text-sm font-bold text-[#3D2C1F] dark:text-white">
              <Code2 size={16} className="text-[#6E5A48] dark:text-purple-300" />
              AI Applications
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
