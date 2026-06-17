import Contact from "../../src/components/Contact";
import Footer from "../../src/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#3D2C1F] dark:bg-[#030014] dark:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(212,180,131,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(184,146,93,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(232,121,249,0.14),_transparent_25%),linear-gradient(180deg,_rgba(3,0,20,0.98),_rgba(8,15,38,1))]" />
      <main className="relative z-10 flex-1 px-4 py-16 md:px-0">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
