import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

// Import your project detail pages (create these files)
import ProjectDetail1 from "./Components/ProjectDetial1";
// import ProjectDetail2 from "./pages/ProjectDetail2";
// import ProjectDetail3 from "./pages/ProjectDetail3";

// Home page layout as one component
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/realestate" element={<ProjectDetail1 />} />
        <Route path="/project/edusity" element={<ProjectDetail1 />} />
        <Route path="/project/shortly" element={<ProjectDetail1 />} />
        {/* <Route path="/project/project-b" element={<ProjectDetail2 />} />
        <Route path="/project/project-c" element={<ProjectDetail3 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
