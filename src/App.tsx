import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NieuwbouwIntro from './components/NieuwbouwIntro';
import AdditionalServices from './components/AdditionalServices';
import Services from './components/services/Services';
import About from './components/about/About';
import ConstructionTypes from './components/construction/ConstructionTypes';
import Projects from './components/projects/Projects';
import FAQ from './components/faq/FAQ';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import OffertePage from './pages/OffertePage';
import BehangerInhuren from './pages/services/BehangerInhuren';
import Renovlies from './pages/services/Renovlies';
import Glasweefsel from './pages/services/Glasweefsel';
import Behangploeg from './pages/services/Behangploeg';
import BinnenSchilderwerk from './pages/services/BinnenSchilderwerk';
import Zolderplaten from './pages/services/Zolderplaten';
import AirlessSpuiten from './pages/services/AirlessSpuiten';
import Vescom from './pages/services/Vescom';
import Stukadoor from './pages/services/Stukadoor';
import PlafondSpuiten from './pages/services/PlafondSpuiten';
import RenovliesSpecialist from './pages/services/RenovliesSpecialist';
import GlasweefselSpecialist from './pages/services/GlasweefselSpecialist';
import BehangerSpecialist from './pages/services/BehangerSpecialist';
import AirlessSpuitenSpecialist from './pages/services/AirlessSpuitenSpecialist';
import Nieuwbouw from './pages/construction/Nieuwbouw';
import Projectbouw from './pages/construction/Projectbouw';
import './App.css';

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#d1d1d1] py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8 text-center">Volg Ons op Facebook</h2>
        <div className="max-w-md mx-auto">
          <div className="elfsight-app-42e97657-195e-40ef-a3e1-d69627a618a5" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased overflow-x-hidden bg-[#8c8c8c]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NieuwbouwIntro />
              <About />
              <Services />
              <AdditionalServices />
              <ConstructionTypes />
              <Projects />
              <FAQ />
              <Testimonials />
              <ElfsightWidget />
              <Contact />
            </>
          } />
          <Route path="/offerte/*" element={<OffertePage />} />
          <Route path="/diensten/behanger-inhuren/*" element={<BehangerInhuren />} />
          <Route path="/diensten/renovlies/*" element={<Renovlies />} />
          <Route path="/diensten/glasweefsel/*" element={<Glasweefsel />} />
          <Route path="/diensten/behangploeg/*" element={<Behangploeg />} />
          <Route path="/diensten/binnen-schilderwerk/*" element={<BinnenSchilderwerk />} />
          <Route path="/diensten/zolderplaten/*" element={<Zolderplaten />} />
          <Route path="/diensten/airless-spuiten/*" element={<AirlessSpuiten />} />
          <Route path="/diensten/vescom/*" element={<Vescom />} />
          <Route path="/diensten/stukadoor/*" element={<Stukadoor />} />
          <Route path="/diensten/plafond-spuiten/*" element={<PlafondSpuiten />} />
          <Route path="/diensten/renovlies-specialist/*" element={<RenovliesSpecialist />} />
          <Route path="/diensten/glasweefsel-specialist/*" element={<GlasweefselSpecialist />} />
          <Route path="/diensten/behanger-specialist/*" element={<BehangerSpecialist />} />
          <Route path="/diensten/airless-specialist/*" element={<AirlessSpuitenSpecialist />} />
          <Route path="/nieuwbouw/*" element={<Nieuwbouw />} />
          <Route path="/projectbouw/*" element={<Projectbouw />} />
        </Routes>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
}

export default App;