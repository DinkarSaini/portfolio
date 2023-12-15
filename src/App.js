// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Resume from './components/resume.jsx';
import About from './components/about.jsx';
import HeroSection from './components/heroSection.jsx';
import Aboutme from './components/aboutme.jsx';
import Leadership from './components/leadership.jsx';
import Experience from './components/experience.jsx';
import SkillsComponent from './components/skillcomponent.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
   
    <HeroSection />
    <Aboutme />
    <Experience />
    <Leadership />
    <SkillsComponent/>
    <Footer/>
    </>
  );
};

export default App;
