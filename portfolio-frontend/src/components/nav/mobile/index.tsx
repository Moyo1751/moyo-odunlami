import { Github } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const navLinks = [
    { slug: "/", title: "Home" },
    { slug: "/about", title: "About" },
    { slug: "/portfoli", title: "Portfolio" },
    { slug: "/contact", title: "Contact" },
  ];
  return (
    <nav className="px-2 glass-nav rounded-xl pt-2 pb-4 mb-2">
      <ul>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-gray-400 py-2 pl-2 hover:text-nav-text-hover hover:bg-accent/50 rounded-xl mb-1"
          >
            <Link href={link.slug}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <button className="flex items-center justify-center text-white w-full glass-card gap-4 p-2 hover:bg-github-btn hover:text-github-btn-text rounded-2xl mt-3 overflow-hidden bg-black">
        <Github className="w-4 h-4" />
        GitHub
      </button>
    </nav>
  );
}
