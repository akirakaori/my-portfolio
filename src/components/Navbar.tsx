const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.24em] text-white">
          Portfolio
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
