export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-shell grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
            Full-Stack Developer
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            Building modern websites with strong performance and clean user experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I focus on responsive interfaces, maintainable code, and thoughtful visual detail
            across landing pages, portfolios, and product experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`const developer = {
  stack: ["Next.js", "TypeScript", "Tailwind"],
  focus: "Fast, polished web products",
  status: "Open to collaboration",
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
