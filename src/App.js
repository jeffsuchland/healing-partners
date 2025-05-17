import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Screens
import Home from './screens/Home';
import Process from './screens/Process';
import WhyChoose from './screens/WhyChoose';
import PrePlan from './screens/PrePlan';
import OurStory from './screens/OurStory';
import SoilOptions from './screens/SoilOptions';
import FAQ from './screens/FAQ';
import Blog from './screens/Blog';
import Contact from './screens/Contact';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/why-choose-terramation" element={<WhyChoose />} />
          <Route path="/pre-plan" element={<PrePlan />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/soil-options" element={<SoilOptions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
