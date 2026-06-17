"use client";

import { motion } from "motion/react";
import {
  Cpu,
  Code2,
  Database,
  Server,
  Wrench,
  Cloud,
} from "lucide-react";

const skills = [
  {
    title: "Java",
    category: "Language",
    icon: <Code2 />,
    description: "Building backend logic, object-oriented systems, and enterprise applications.",
  },
  {
    title: "C# / ASP.NET Core",
    category: "Backend",
    icon: <Server />,
    description: "Developing secure APIs, web applications, and full-stack systems.",
  },
  {
    title: "Python",
    category: "Language",
    icon: <Code2 />,
    description: "Working on scripting, data analysis, automation, and AI-powered solutions.",
  },
  {
    title: "JavaScript",
    category: "Language",
    icon: <Code2 />,
    description: "Creating interactive web applications and connecting frontend with backend APIs.",
  },
  {
    title: "TypeScript",
    category: "Language",
    icon: <Code2 />,
    description: "Writing safer, more maintainable JavaScript applications with static typing.",
  },
  {
    title: "React / Next.js",
    category: "Frontend",
    icon: <Cpu />,
    description: "Building modern, responsive interfaces and full-stack web experiences.",
  },
  {
    title: "Node.js / Express",
    category: "Backend",
    icon: <Server />,
    description: "Creating REST APIs, backend services, authentication, and server-side logic.",
  },
  {
  title: "MySQL",
  category: "Database",
  icon: <Database />,
  description:
    "Designing relational databases, writing optimized queries, and managing structured data efficiently.",
},
  {
    title: "PostgreSQL",
    category: "Database",
    icon: <Database />,
    description: "Designing relational databases, queries, and structured data solutions.",
  },
  {
    title: "MongoDB",
    category: "Database",
    icon: <Database />,
    description: "Working with flexible NoSQL data models for scalable applications.",
  },
  {
    title: "Docker",
    category: "DevOps",
    icon: <Cloud />,
    description: "Containerizing applications and preparing projects for consistent deployment.",
  },
  {
    title: "Git / GitHub",
    category: "Tools",
    icon: <Wrench />,
    description: "Managing version control, collaboration, repositories, and project workflows.",
  },
  {
    title: "Postman",
    category: "Tools",
    icon: <Wrench />,
    description: "Testing APIs, validating endpoints, and improving backend development workflows.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#F2E8D8] py-28 text-[#3D2C1F] dark:bg-[#0b0b0f] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,180,131,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(184,146,93,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_35%)]" />

      <div className="container-shell relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#B7925D]/10 px-4 py-2 text-sm font-medium text-[#6E5A48] dark:bg-purple-500/10 dark:text-purple-300"
          >
            <Cpu size={16} /> Technical Skills
          </motion.div>

          <h2 className="text-4xl font-bold md:text-6xl">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6E5A48] dark:text-gray-400">
            Technologies I use to build backend systems, full-stack applications,
            APIs, databases, and production-ready software.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="rounded-3xl border border-[#B7925D]/20 bg-white/55 p-8 backdrop-blur-xl transition-colors hover:bg-[#F7F2E8]/75 dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B7925D]/15 text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300">
                {skill.icon}
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#6E5A48] dark:text-purple-300">
                {skill.category}
              </p>

              <h3 className="mb-4 text-2xl font-bold">{skill.title}</h3>

              <p className="leading-7 text-[#6E5A48] dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
