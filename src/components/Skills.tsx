"use client";
import { motion } from 'motion/react';
import { Cpu, Globe, Layout, Database, Terminal, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="text-purple-400" />,
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="text-blue-400" />,
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 70 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: <Terminal className="text-purple-400" />,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'AWS / Vercel', level: 75 },
      { name: 'Figma', level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <Cpu size={16} /> My Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've spent years honing my craft across various technologies. 
            Here's a snapshot of my technical arsenal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="p-8 glass-card rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
