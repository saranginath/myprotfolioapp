import { useState } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <Experience />
      <Projects />
      {/*<Skills />*/}
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;