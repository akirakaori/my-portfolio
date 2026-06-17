import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
return ( <footer className="border-t border-white/10 py-10 relative z-10"> <div className="max-w-7xl mx-auto px-6"> <div className="flex flex-col items-center gap-6">

      {/* Logo */}
      <a
        href="#home"
        className="text-2xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Ashika
        </span>
      </a>

      {/* Social Icons */}
      <div className="flex items-center gap-8 text-xl">
        <a
          href="https://github.com/akirakaori"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/in/ashika-kambang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="mailto:ashikakambang@gmail.com"
          className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110"
          aria-label="Email"
        >
          <MdEmail size={24} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 text-sm text-center">
        Building scalable software systems and real-world solutions.
      </p>

      {/* Copyright */}
      <div className="text-gray-500 text-sm flex items-center gap-1">
        Made with{" "}
        <Heart
          size={14}
          className="text-red-500 fill-red-500"
        />{" "}
        by Ashika Kambang © {new Date().getFullYear()}
      </div>

    </div>
  </div>
</footer>


);
}
