import About from "./about/page";
import Portfolio from "./portfolio/page";
import ContactMe from "./contact/page";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <br />
      <About /> <br />
      <Portfolio />
      <ContactMe />
    </main>
  );
}
