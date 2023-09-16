import "./App.css";

import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="w-full min-h-screen bg-white font-baijam scroll-smooth">
      <Loader />
      <Hero />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
