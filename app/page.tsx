import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  return (
    <>
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
