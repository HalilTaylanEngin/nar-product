import React, { useState } from "react";

import "./App.scss";
import Intro from "./components/intro/Intro";
import TopBar from "./components/topbar/TopBar";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Navi from "./components/navi/Navi";
import Footer from "./components/footer/Footer";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Direct from "./components/direct/Direct";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navi menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onClick={() => setMenuOpen(false)}>
        <Intro />
        <HowItWorks />
        <Works />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
      <Direct />
    </div>
  );
}

export default App;
