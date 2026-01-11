// src/components/Footer.jsx
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    console.log(`
       _____       _     _           
      |  ___|__ __| |__ (_)_ __  ___ 
      | |_ / _ \\ '__| '_ \\| | '_ \\/ __|
      |  _|  __/ |  | |_) | | | | \\__ \\
      |_|  \\___|_|  |_.__/|_|_| |_|___/

      Thanks for visiting. 
      Built by Harsh — https://github.com/yourusername
    `);
  }, []);

  return (
    <footer className="bg-plantgreen-900 text-plantgreen-50 py-10 px-6 sm:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p className="text-lg font-[var(--font-grotesk)] text-center">
          Let’s build something great together.
        </p>
        <div className="flex gap-4 text-sm font-[var(--font-inter)]">
          <a
            href="mailto:you@example.com"
            className="hover:text-plantgreen-300 transition"
          >
            you@example.com
          </a>
          <span className="text-plantgreen-500">|</span>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-plantgreen-300 transition"
          >
            GitHub
          </a>
          <span className="text-plantgreen-500">|</span>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-plantgreen-300 transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-plantgreen-500 font-[var(--font-fira)] mt-4">
          Built with 🪴, Tailwind, GSAP, and ☕
        </p>
      </div>
    </footer>
  );
}
