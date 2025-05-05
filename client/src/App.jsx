import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';  // Import Home component
import AboutUs from './AboutUs';  // Import AboutUs component
import ContactUs from './ContactUs';  // Import ContactUs component
import HowItWorks from './HowItWorks';
import PrivacyPolicy from './PrivacyPolicy';
import Scan from './Scan';
import ScanProcessing from './ScanProcessing';
import ScanSummary from './ScanSummary';
import './App.css';

function App() {
  return (
    <Router>
      <div className='containnav'>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li><Link to="/" className='nav-item'>Home</Link></li>
            <li><Link to="/how-it-works" className='nav-item'>How It Works</Link></li>
            <li><Link to="/privacy-policy" className='nav-item'>Privacy</Link></li>
            <li><Link to="/about-us" className='nav-item'>About Us</Link></li>
            <li><Link to="/contact-us" className='nav-item'>Contact Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/scan" element={<Scan />} />          
          <Route path="/scan-processing/:scanId" element={<ScanProcessing />} />
          <Route path="/scan-summary/:scanId" element={<ScanSummary />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
