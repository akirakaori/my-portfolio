"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ExternalLink,
  MapPin,
} from "lucide-react";

const experiences = [
    {
    type: "Education",
    icon: <GraduationCap size={22} />,
    title: "BSc (Hons) Computing",
    organization: "Islington College",
    link: "#",
    period: "2023 - Present",
    location: "Kathmandu, Nepal",
    description: [
      "Studying computing with focus on software engineering, databases, cloud computing, AI, and full-stack development.",
      "Built academic and real-world projects across healthcare, automation, IoT, machine learning, and web systems.",
    ],
    tech: [
      "Software Engineering",
      "Cloud Computing",
      "AI",
      "Databases",
      "Full-Stack",
    ],
  },
  {
    type: "Internship",
    icon: <BriefcaseBusiness size={22} />,
    title: "Full Stack Developer Intern",
    organization: "Info Brain Technologies",
    link: "https://www.infobraintechs.com/index.html",
    period: "06/2025 - 09/2025",
    location: "Chandol, Kathmandu",
    description: [
      "Developed secure backend services and RESTful APIs for a core banking system using C# and ASP.NET Core.",
      "Designed and optimized PostgreSQL database schemas, complex SQL queries, and banking data workflows.",
      "Built responsive frontend components with Bootstrap and JavaScript to improve internal banking operations.",
      "Collaborated on scalable financial systems supporting transaction processing, reporting, and backend integrations.",
    ],
    tech: [
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "REST APIs",
      "Bootstrap",
      "JavaScript",
    ],
  },
  
  {
    type: "Certifications",
    icon: <Award size={22} />,
    title: "AWS Academy Learning",
    organization: "AWS Academy",
    link: "#",
    period: "2024",
    location: "Professional Learning",
    description: [
      "Completed learning paths in Cloud Foundations, Data Engineering, Machine Learning, and Machine Learning for NLP.",
      "Strengthened understanding of cloud services, data workflows, and AI-powered application development.",
    ],
    tech: [
      "AWS",
      "Cloud Foundations",
      "Data Engineering",
      "Machine Learning",
      "NLP",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0b0b0f] py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_35%)]" />

      <div className="container-shell relative z-10">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300"
          >
            My Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            My path through software engineering, backend development, cloud
            technologies, and continuous learning.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent md:block" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-0 top-8 hidden h-11 w-11 items-center justify-center rounded-full border border-purple-400/40 bg-[#111827] text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] md:flex">
                  {item.icon}
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:bg-white/[0.07] md:p-8">
                  <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                    <div>
                      <span className="mb-4 inline-flex rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                        {item.type}
                      </span>

                      <h3 className="text-2xl font-bold md:text-3xl">
                        {item.title}
                      </h3>

                      <a
                        href={item.link}
                        target={item.link === "#" ? undefined : "_blank"}
                        rel={item.link === "#" ? undefined : "noreferrer"}
                        className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-purple-300 transition hover:text-purple-200"
                      >
                        {item.organization}
                        {item.link !== "#" && <ExternalLink size={16} />}
                      </a>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>{item.period}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={15} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <ul className="space-y-4 text-gray-400">
                    {item.description.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}