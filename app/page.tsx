import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import Design from "@/components/Design";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Credentials />
      <Projects />
      <Design />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
