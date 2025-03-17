import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import Navbar from './Layouts/Navbar.jsx';
import Footer from './Layouts/Footer.jsx';
import { AuroraBackground } from './ui/aurora-background.jsx';
import IntroAnim from './Layouts/IntroAnim.jsx';
import LightTrail from './components/LightTrail.jsx';



const App = () => {
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    menu: useRef(null),
    contact: useRef(null),
    reviews: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>

      <AuroraBackground className="relative z-0 bg-black">
        <div>
            <IntroAnim/>
            <LightTrail/>
            
            
        <Navbar scrollToSection={scrollToSection} />
        <div className="relative  ">
          <section ref={sectionsRef.home} id="home"><HomePage /></section>
          <section ref={sectionsRef.about} id="about"><AboutPage /></section>
          <section ref={sectionsRef.menu} id="menu"><MenuPage /></section>
          <section ref={sectionsRef.reviews} id="reviews"><ReviewsPage /></section>
          <section ref={sectionsRef.contact} id="contact"><ContactPage /></section>
          
        </div>
        <Footer />
        </div>
      </AuroraBackground>
    </BrowserRouter>
  );
};

export default App;
