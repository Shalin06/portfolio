import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { StarsCanvas } from "./components/ui/star-background";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 -z-10 rotate-180 -top-95 left-0 w-full h-1/2 object-cover"
      >
        <source src="videos/blackhole.webm" type="video/webm" />
      </video>
      <StarsCanvas />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
