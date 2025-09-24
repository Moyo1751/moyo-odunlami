import { Code, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const para =
    "Passionate developer crafting elegant solutions with modern technologies. Specialized in React, Node.js, and creating pixel-perfect user experiences.";
  return (
    <section>
      <div className="flex bg-black text-white items-center justify-center gap-4 py-2 mb-8">
        <Code className="w-5 h-5 text-code-blue" />
        <p className="">Frontend Developer</p>
      </div>
      <h1 className="text-center">
        Building Digital <br /> <span>Experiences</span>
      </h1>
      <p className="mb-2 text-center w-[76%] mx-auto py-6">{para}</p>
      <div>
        <Link
          href={"/projects"}
          className="flex items-center justify-center gap-4 border p-2 bg-gradient-bg text-black text-sm rounded-2xl dark:text-white"
        >
          View Projects
          <ExternalLink className="w-5 h-5" />
        </Link>
        <a
          href="https://www.linkedin.com/in/moyosore-odunlami-636233291"
          target="_blank"
          className="flex items-center justify-center text-white w-full glass-card gap-4 p-2 hover:bg-github-btn hover:text-github-btn-text rounded-2xl mt-3 overflow-hidden bg-black"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>

      <div></div>
    </section>
  );
}
