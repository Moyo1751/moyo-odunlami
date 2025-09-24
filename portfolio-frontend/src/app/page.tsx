import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <article aria-label="Hero Section" className="px-2 py-6 w-full">
        <Hero />
      </article>
      <br />
      <article aria-label="About Section" className="w-full">
        <About />
      </article>
      <br />
      <article aria-label="Projects Section" className="w-full">
        <Projects />
      </article>
      <br />
      <article aria-label="Contact Section" className="w-full">
        <Contact />
      </article>
    </main>
  );
}
