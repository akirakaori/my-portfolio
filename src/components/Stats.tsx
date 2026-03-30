const stats = [
  { value: "20+", label: "Projects built" },
  { value: "3+", label: "Years learning and shipping" },
  { value: "100%", label: "Responsive layouts" },
];

export default function Stats() {
  return (
    <section className="py-12">
      <div className="container-shell grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="glass-card rounded-3xl p-8">
            <div className="gradient-text text-4xl font-semibold">{item.value}</div>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
