const projects = [
  {
    title: "Portfolio Platform",
    description: "A personal site with polished motion, strong typography, and a clean content flow.",
  },
  {
    title: "Dashboard UI",
    description: "A responsive admin interface focused on clarity, speed, and accessible interactions.",
  },
  {
    title: "Landing Experience",
    description: "A conversion-focused marketing page with strong visual hierarchy and custom styling.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-shell">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-card rounded-[2rem] p-6">
              <div className="mb-6 h-40 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(96,165,250,0.18),_rgba(232,121,249,0.16))]" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
