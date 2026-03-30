"use client";
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
          >
            <MessageSquare size={16} /> Get In Touch
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out! 
            I'm always open to discussing new projects and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-6 glass-card rounded-3xl"
            >
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Me</h3>
                <p className="text-gray-400 text-sm">hello@alexrivera.dev</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 p-6 glass-card rounded-3xl"
            >
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-400 text-sm">San Francisco, CA</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6 p-6 glass-card rounded-3xl"
            >
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Me</h3>
                <p className="text-gray-400 text-sm">+1 (555) 000-0000</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 glass-card rounded-[2rem]"
          >
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
