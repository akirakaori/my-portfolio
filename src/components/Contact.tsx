export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container-shell glass-card rounded-[2rem] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Let&apos;s talk about your next project.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          I&apos;m available for portfolio sites, landing pages, and frontend development work.
          Add your real email or social links here when you&apos;re ready.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            your.email@example.com
          </a>
          <a
            href="#projects"
            className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}
