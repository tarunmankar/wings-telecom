import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 42 42" fill="none">
                <polygon points="21,2 40,12 40,30 21,40 2,30 2,12" fill="#0F1F3D" stroke="#00C8FF" strokeWidth="1.5"/>
                <text x="21" y="27" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Rajdhani,sans-serif">W</text>
              </svg>
            </div>
            <div className="logo-text">Wings<span>Telecommunication Services</span></div>
          </Link>
          <p>Specialized telecom field services across Gujarat and Madhya Pradesh. 350+ sites. 3+ years. EHS certified.</p>
        </div>
        
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/services">Equipment Installation</Link></li>
            <li><Link to="/services">Dismantling &amp; Shifting</Link></li>
            <li><Link to="/services">Scrap Management</Link></li>
            <li><Link to="/services">Solar Installation</Link></li>
            <li><Link to="/services">Site Survey</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/about">EHS Standards</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Get a Quote</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wings Telecommunication Services. All rights reserved.</p>
        <p>Made with <span>♥</span> for India's telecom infrastructure</p>
      </div>
    </footer>
  );
}

export default Footer;
