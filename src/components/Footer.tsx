import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Ashika Kambang
            </span>
          </a>

          <div className="flex items-center gap-8 text-xl">
            <a
              href="https://github.com/akirakaori"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-purple-400"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/ashika-kambang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:ashikakambang@gmail.com"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-red-400"
              aria-label="Email"
            >
              <MdEmail size={24} />
            </a>
          </div>

          <p className="text-center text-sm text-gray-500">
            Building scalable software systems and real-world solutions.
          </p>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            Made by Ashika Kambang &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
