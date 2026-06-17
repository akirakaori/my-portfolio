"use client";

import { motion } from "motion/react";
import { ExternalLink, FolderOpen, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Lakshya",
    subtitle: "AI Career Intelligence Platform",
    description:
      "AI-powered career intelligence platform with resume parsing, job matching, recruiter workflows, intelligent recommendations, and real-time notifications.",
    tags: ["AI", "React", "Node.js", "Career Tech", "Recommendations"],
    github: "https://github.com/akirakaori/Lakshya",
    demo: "#",
    featured: true,
  },
  {
    title: "Vehicle Management System",
    subtitle: "Parts & Service Platform",
    description:
      "Full-stack vehicle parts inventory and service management system with JWT authentication, PostgreSQL, Entity Framework Core, and role-based workflows.",
    tags: ["React", "ASP.NET Core", "PostgreSQL", "JWT", "EF Core"],
    github: "https://github.com/akirakaori/Vehicle-Management-System",
    demo: "#",
    featured: true,
  },
  {
    title: "Cliniterra",
    subtitle: "Healthcare Appointment System",
    description:
      "Enterprise healthcare appointment management system built with Jakarta EE, JSP, Servlets, JDBC, and MySQL using MVC architecture principles.",
    tags: ["Java", "Jakarta EE", "JSP", "MySQL", "MVC"],
    github: "https://github.com/akirakaori/Cliniterra",
    demo: "#",
  },
  {
    title: "BrainBuzz",
    subtitle: "Quiz & Learning Platform",
    description:
      "Full-stack quiz platform with JWT authentication, role-based authorization, automated scoring, profile management, and secure REST APIs.",
    tags: ["React", "Node.js", "JWT", "REST API", "MongoDB"],
    github: "https://github.com/akirakaori/BrainBuzz",
    demo: "#",
  },
  {
    title: "Kumari Cinemas",
    subtitle: "Cinema Operations System",
    description:
      "Cinema operations and ticket management platform built with ASP.NET Web Forms, C#, Oracle Database, and Bootstrap.",
    tags: ["ASP.NET", "C#", "Oracle", "Bootstrap"],
    github: "https://github.com/akirakaori/KumariCinemas",
    demo: "#",
  },
  {
    title: "Crime Data Analysis",
    subtitle: "Python Analytics Project",
    description:
      "Python-based data analysis project focused on identifying crime trends, visualizing patterns, and extracting meaningful insights from datasets.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
    github: "https://github.com/akirakaori/crime-data-project",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F7F2E8] py-28 text-[#3D2C1F] dark:bg-[#0b0b0f] dark:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,180,131,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(184,146,93,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.1),transparent_35%)]" />

      <div className="container-shell relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#B7925D]/10 px-4 py-2 text-sm font-medium text-[#6E5A48] dark:bg-purple-500/10 dark:text-purple-300"
            >
              <FolderOpen size={16} /> Portfolio
            </motion.div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#6E5A48] dark:text-gray-400">
            A curated selection of backend, full-stack, enterprise, and
            AI-powered applications built across real-world domains.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#B7925D]/20 bg-white/55 p-8 backdrop-blur-xl transition hover:bg-[#F2E8D8]/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#B7925D]/20 blur-3xl transition group-hover:bg-[#B7925D]/30 dark:bg-purple-500/20 dark:group-hover:bg-purple-500/30" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#B7925D]/25 bg-[#B7925D]/10 px-4 py-2 text-sm font-semibold text-[#6E5A48] dark:border-purple-400/25 dark:bg-purple-500/10 dark:text-purple-200">
                    <Sparkles size={15} />
                    Featured Project
                  </span>

                  <span className="text-sm text-[#6E5A48] dark:text-gray-500">
                    0{index + 1}
                  </span>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
                  {project.subtitle}
                </p>

                <h3 className="mb-5 text-3xl font-bold transition group-hover:text-[#6E5A48] dark:group-hover:text-purple-300">
                  {project.title}
                </h3>

                <p className="mb-8 leading-8 text-[#6E5A48] dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-[#B7925D]/20 bg-[#F2E8D8]/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#6E5A48] dark:border-white/10 dark:bg-black/30 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#B7925D]/25 px-5 py-3 text-sm font-semibold text-[#3D2C1F] transition hover:bg-[#F2E8D8] dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#3D2C1F] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-black"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.slice(2).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group rounded-3xl border border-[#B7925D]/20 bg-white/55 p-6 backdrop-blur-xl transition hover:bg-[#F2E8D8]/70 dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B7925D]/15 text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300">
                <FolderOpen size={22} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#6E5A48] dark:text-purple-300">
                {project.subtitle}
              </p>

              <h3 className="mb-4 text-xl font-bold transition group-hover:text-[#6E5A48] dark:group-hover:text-purple-300">
                {project.title}
              </h3>

              <p className="mb-6 min-h-[112px] text-sm leading-7 text-[#6E5A48] dark:text-gray-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[#B7925D]/20 bg-[#F2E8D8]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6E5A48] dark:border-white/10 dark:bg-black/30 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6E5A48] transition hover:text-[#3D2C1F] dark:text-purple-300 dark:hover:text-purple-200"
              >
                View Repository <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/akirakaori"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#B7925D]/25 px-8 py-4 font-bold text-[#3D2C1F] transition hover:bg-[#F2E8D8] dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            <FaGithub size={20} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
