"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (!statusMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatusMessage("");
      setStatusType(null);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [statusMessage]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    setStatusType(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      setFormData(initialFormData);
      setStatusType("success");
      setStatusMessage("Message sent successfully. I'll get back to you soon.");
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="relative min-h-screen py-16 overflow-hidden bg-[#F7F2E8] text-[#3D2C1F] dark:bg-[#050816] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,180,131,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(184,146,93,0.15),transparent_40%)] dark:bg-transparent" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#D4B483]/20 rounded-full blur-[140px] dark:bg-purple-600/20" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#B7925D]/15 rounded-full blur-[130px] dark:bg-blue-600/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7925D]/10 text-[#6E5A48] text-sm font-semibold mb-5 dark:bg-purple-500/15 dark:text-purple-300"
          >
            <MessageSquare size={15} />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-[#3D2C1F] dark:text-white">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-[#D4B483] to-[#B7925D] bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-500">
              Together
            </span>
          </h2>

          <p className="text-[#6E5A48] max-w-2xl mx-auto text-base md:text-lg dark:text-gray-400">
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
              text="+977 **********"
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
              className="flex items-center gap-5 px-6 py-4 rounded-2xl border border-[#B7925D]/20 bg-white/55 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="p-3 rounded-2xl bg-[#B7925D]/10 text-[#6E5A48] dark:bg-blue-500/10 dark:text-blue-400">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-[#3D2C1F] text-sm md:text-base dark:text-gray-200">
                  Based in Kathmandu, Nepal
                </p>
                <p className="text-[#6E5A48] text-sm dark:text-gray-400">
                  Open to Remote & On-site Opportunities
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[#B7925D]/20 bg-white/55 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_60px_rgba(183,146,93,0.16)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_0_60px_rgba(124,58,237,0.12)]"
          >
            <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-[#6E5A48] ml-1 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/60 border border-[#B7925D]/20 rounded-2xl text-[#3D2C1F] placeholder:text-[#6E5A48]/65 focus:outline-none focus:border-[#B7925D] transition dark:bg-white/[0.045] dark:border-white/10 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-[#6E5A48] ml-1 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/60 border border-[#B7925D]/20 rounded-2xl text-[#3D2C1F] placeholder:text-[#6E5A48]/65 focus:outline-none focus:border-[#B7925D] transition dark:bg-white/[0.045] dark:border-white/10 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-semibold text-[#6E5A48] ml-1 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  autoComplete="off"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/60 border border-[#B7925D]/20 rounded-2xl text-[#3D2C1F] placeholder:text-[#6E5A48]/65 focus:outline-none focus:border-[#B7925D] transition dark:bg-white/[0.045] dark:border-white/10 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-[#6E5A48] ml-1 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  autoComplete="off"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/60 border border-[#B7925D]/20 rounded-2xl text-[#3D2C1F] placeholder:text-[#6E5A48]/65 focus:outline-none focus:border-[#B7925D] transition resize-none dark:bg-white/[0.045] dark:border-white/10 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4B483] to-[#B7925D] text-[#3D2C1F] font-bold flex items-center justify-center gap-3 hover:from-[#B7925D] hover:to-[#9C7645] hover:text-white transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100 dark:from-purple-600 dark:to-blue-600 dark:text-white dark:hover:opacity-95"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
                {statusMessage ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-4 text-center text-sm font-semibold ${
                      statusType === "success"
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-red-700 dark:text-red-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}
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
      ? "bg-[#B7925D]/15 text-[#6E5A48] dark:bg-purple-500/15 dark:text-purple-300"
      : "bg-[#B7925D]/15 text-[#6E5A48] dark:bg-blue-500/15 dark:text-blue-300";

  const borderStyle =
    color === "purple"
      ? "border-[#B7925D]/20 dark:border-purple-500/25"
      : "border-[#B7925D]/20 dark:border-blue-500/25";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`flex items-center gap-6 px-6 py-5 rounded-[1.6rem] border ${borderStyle} bg-white/55 backdrop-blur-xl dark:bg-white/[0.035]`}
    >
      <div className={`p-4 rounded-2xl ${iconStyle}`}>{icon}</div>

      <div className="min-w-0">
        <h3 className="font-bold text-[#3D2C1F] text-lg mb-1 dark:text-white">{title}</h3>
        <p className="text-[#6E5A48] text-sm md:text-base truncate dark:text-gray-400">{text}</p>
      </div>
    </motion.div>
  );
}
