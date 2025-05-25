import AboutMe from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ResearchPapers from "@/components/Papers";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <ResearchPapers />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
