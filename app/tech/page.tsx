import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorldEasterEgg from "@/components/WorldEasterEgg";

export default function TechWorld() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Credentials />
      <Projects />
      <Services />
      <Contact />
      <WorldEasterEgg
        message="Did you know John is also a Man of God?"
        linkLabel="Enter the Ministerial World →"
        href="/ministry"
        color="#9f1239"
      />
      <Footer />
    </main>
  );
}
