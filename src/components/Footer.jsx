import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ marginBottom: '16px', display: 'inline-block' }}>
            <img src={logoImg} alt="Wings Telecom Logo" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p>Specialized telecom field services across All India • 400+ sites • 5+ years • EHS certified</p>
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
