import { Routes,Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />   
     </Routes>
     {/* 
     <Skills/>
     <About/> */}
     <Footer/>  
    </div>
  );
}

export default App;
