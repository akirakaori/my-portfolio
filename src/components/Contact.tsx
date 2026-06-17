"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 text-purple-300 text-sm font-semibold mb-5"
          >
            <MessageSquare size={15} />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-white">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out!
            I&apos;m always open to discussing new projects and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.85fr] gap-8 lg:gap-10 items-start">
          <div className="space-y-5">
            <ContactCard
              icon={<Mail size={26} />}
              title="Email Me"
              text="ashikakambang@gmail.com"
              color="purple"
              delay={0}
            />

            <ContactCard
              icon={<Phone size={26} />}
              title="Call Me"
              text="+61 123 456 789"
              color="blue"
              delay={0.1}
            />

            <ContactCard
              icon={<FaGithub size={26} />}
              title="GitHub"
              text="github.com/akirakaori"
              color="purple"
              delay={0.2}
            />

            <ContactCard
              icon={<FaLinkedinIn size={26} />}
              title="LinkedIn"
              text="linkedin.com/in/ashikakambang"
              color="blue"
              delay={0.3}
            />

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-5 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-gray-200 text-sm md:text-base">
                  Based in Kathmandu, Nepal
                </p>
                <p className="text-gray-400 text-sm">
                  Open to Remote & On-site Opportunities
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 shadow-[0_0_60px_rgba(124,58,237,0.12)]"
          >
            <form className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/[0.045] border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white/[0.045] border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/[0.045] border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/[0.045] border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:opacity-95 transition active:scale-[0.98]">
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  text,
  color,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: "purple" | "blue";
  delay: number;
}) {
  const iconStyle =
    color === "purple"
      ? "bg-purple-500/15 text-purple-300"
      : "bg-blue-500/15 text-blue-300";

  const borderStyle =
    color === "purple"
      ? "border-purple-500/25"
      : "border-blue-500/25";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`flex items-center gap-6 px-6 py-5 rounded-[1.6rem] border ${borderStyle} bg-white/[0.035] backdrop-blur-xl`}
    >
      <div className={`p-4 rounded-2xl ${iconStyle}`}>{icon}</div>

      <div className="min-w-0">
        <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base truncate">{text}</p>
      </div>
    </motion.div>
  );
}