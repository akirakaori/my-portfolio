"use client";
import { motion } from 'motion/react';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Content Generator',
    description: 'A full-stack application that uses OpenAI to generate high-quality blog posts and social media content.',
    image: 'https://picsum.photos/seed/ai-app/800/500',
    tags: ['React', 'Node.js', 'OpenAI', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory, Stripe integration, and a custom dashboard.',
    image: 'https://picsum.photos/seed/shop/800/500',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency tracking app with interactive charts and portfolio management features.',
    image: 'https://picsum.photos/seed/crypto/800/500',
    tags: ['React', 'D3.js', 'CoinGecko API', 'Firebase'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
            >
              <FolderOpen size={16} /> Portfolio
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="gradient-text">Projects</span></h2>
          </div>
          <p className="text-gray-400 max-w-md">
            A selection of my favorite works, ranging from complex web applications to experimental UI experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.demo} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-md text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 glass-card rounded-full font-bold hover:bg-white/10 transition-all active:scale-95">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
