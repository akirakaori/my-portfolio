"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

import { cn } from "../lib/utils";

const stats = [
  { value: "2+", label: "Years Experience", icon: BriefcaseBusiness },
  { value: "15+", label: "Projects Completed", icon: Code2 },
  { value: "10+", label: "Technologies", icon: Zap },
  { value: "100%", label: "Commitment", icon: Sparkles },
];

const particles = [
  { left: "9%", top: "24%", size: 3, delay: 0.1, duration: 5.5 },
  { left: "18%", top: "68%", size: 4, delay: 1.1, duration: 6.2 },
  { left: "30%", top: "16%", size: 2, delay: 0.6, duration: 5.8 },
  { left: "42%", top: "78%", size: 3, delay: 1.8, duration: 6.8 },
  { left: "58%", top: "18%", size: 4, delay: 0.8, duration: 5.6 },
  { left: "72%", top: "64%", size: 2, delay: 1.5, duration: 6.1 },
  { left: "83%", top: "28%", size: 3, delay: 0.3, duration: 5.9 },
  { left: "91%", top: "74%", size: 4, delay: 2.1, duration: 6.5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function HeroButton({
  children,
  className,
  href,
  download,
  variant = "secondary",
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  download?: boolean;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      download={download}
      className={cn(
        "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition sm:w-auto",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300",
        variant === "primary"
          ? "bg-white text-slate-950 shadow-[0_0_38px_rgba(147,51,234,0.32)] hover:bg-violet-50"
          : "border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.1]",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

export default function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false);

  const particleNodes = useMemo(
    () =>
      particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          aria-hidden="true"
          className="absolute rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(125,211,252,0.95)]"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
          }}
          animate={{ opacity: [0.18, 0.95, 0.18], y: [0, -18, 0] }}
          transition={{
            delay: particle.delay + index * 0.05,
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      )),
    [],
  );

  return (
    <section
      id="home"
      className={cn(
        "relative isolate flex min-h-screen overflow-hidden bg-[#030014] px-4 text-white sm:px-6 lg:px-8",
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-[110px]"
          animate={{ scale: [1, 1.18, 1], x: [0, 24, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[-10%] top-20 h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-[130px]"
          animate={{ scale: [1.08, 0.94, 1.08], y: [0, 28, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-16rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]"
          animate={{ opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        {particleNodes}
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center pb-10 pt-24 text-center sm:pt-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-5"
        >
          <motion.div
            className="absolute -inset-5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 opacity-50 blur-2xl"
            animate={{ rotate: 360, scale: [1, 1.06, 1] }}
            transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-500 to-sky-400 p-[3px] shadow-[0_0_54px_rgba(124,58,237,0.48)] sm:h-40 sm:w-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-950">
              {imageFailed ? (
                <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_35%_25%,rgba(125,211,252,0.36),transparent_32%),linear-gradient(135deg,#1e1b4b,#581c87_52%,#082f49)] text-4xl font-black text-white">
                  AK
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Ashika Kambang"
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-cover"
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-violet-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_48px_rgba(88,28,135,0.28)] backdrop-blur-2xl"
        >
          <span aria-hidden="true">✨</span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          className="max-w-6xl text-balance text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[7.6rem]"
        >
          Building Scalable
          <br />
          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-[length:220%_auto] bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(168,85,247,0.42)]">
            Software
          </span>{" "}
          Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, delay: 0.32, ease: "easeOut" }}
          className="mt-5 text-base font-semibold text-sky-100 sm:text-lg"
        >
          Backend | Full-Stack Developer
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, delay: 0.42, ease: "easeOut" }}
          className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-slate-300 sm:text-base md:text-lg"
        >
          I build scalable software systems and real-world solutions using modern backend architecture,
          cloud technologies, and intuitive user experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, delay: 0.52, ease: "easeOut" }}
          className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <HeroButton href="#projects">
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </HeroButton>
          <HeroButton href="/cv/Ashika-Kambang-Resume.pdf" download>
            Download CV
            <Download className="h-4 w-4" />
          </HeroButton>
          <HeroButton href="#contact">
            Contact Me
            <Mail className="h-4 w-4" />
          </HeroButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.62, ease: "easeOut" }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_100px_rgba(15,23,42,0.36)] backdrop-blur-2xl md:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={cn(
                  "relative flex min-h-28 flex-col items-center justify-center px-3 py-5",
                  index !== 0 && "md:border-l md:border-white/10",
                  index % 2 === 1 && "border-l border-white/10 md:border-l",
                  index > 1 && "border-t border-white/10 md:border-t-0",
                )}
              >
                <Icon className="mb-2 h-4 w-4 text-violet-300" aria-hidden="true" />
                <strong className="bg-gradient-to-r from-fuchsia-300 to-sky-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                  {stat.value}
                </strong>
                <span className="mt-1 text-xs font-medium text-slate-400">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-7 hidden h-11 w-7 items-start justify-center rounded-full border border-white/20 p-2 text-white/70 sm:flex"
        >
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown className="h-3 w-3" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
