import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
return ( <footer className="border-t border-[#B7925D]/20 py-10 relative z-10 bg-[#F7F2E8] text-[#3D2C1F] dark:border-white/10 dark:bg-transparent dark:text-white"> <div className="max-w-7xl mx-auto px-6"> <div className="flex flex-col items-center gap-6">


      {/* Logo */}
      <a
        href="#home"
        className="text-2xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-[#D4B483] to-[#B7925D] bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-500">
          Ashika
        </span>
      </a>

      {/* Social Icons */}
      <div className="flex items-center gap-8 text-xl">
        <a
          href="https://github.com/akirakaori"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6E5A48] hover:text-[#3D2C1F] transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-purple-400"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/in/ashika-kambang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6E5A48] hover:text-[#3D2C1F] transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="mailto:ashikakambang@gmail.com"
          className="text-[#6E5A48] hover:text-[#3D2C1F] transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-red-400"
          aria-label="Email"
        >
          <MdEmail size={24} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-[#6E5A48] text-sm text-center dark:text-gray-500">
        Building scalable software systems and real-world solutions.
      </p>

      {/* Copyright */}
      <div className="text-[#6E5A48] text-sm flex items-center gap-1 dark:text-gray-500">
        Made with{" "}
        <Heart
          size={14}
          className="text-[#9C7645] fill-[#9C7645] dark:text-red-500 dark:fill-red-500"
        />{" "}
        by Ashika Kambang © {new Date().getFullYear()}
      </div>

    </div>
  </div>
</footer>


);
}
