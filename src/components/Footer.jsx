import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22,2 41,13 41,31 22,42 3,31 3,13" fill="#0A1628" stroke="#00C8FF" strokeWidth="2.5" strokeLinejoin="round"/>
                <text x="22" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">W</text>
              </svg>
            </div>
            <div className="logo-text">Wings<span>Telecommunication Services</span></div>
          </Link>
          <p>Specialized telecom field services across All India. 400+ sites. 3+ years. EHS certified.</p>
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
