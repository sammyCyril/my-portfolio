import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import About from "@/components/about";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="pt-10">
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}