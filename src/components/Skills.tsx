const skillGroups = [
  ["Next.js", "React", "TypeScript"],
  ["Tailwind CSS", "Animation", "Responsive UI"],
  ["Node.js", "REST APIs", "Performance"],
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container-shell">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          A practical toolkit for building modern websites from concept to deployment.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={index} className="glass-card rounded-3xl p-6">
              {group.map((skill) => (
                <div
                  key={skill}
                  className="mb-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 last:mb-0"
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
