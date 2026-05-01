import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,2 41,13 41,31 22,42 3,31 3,13" fill="#0A1628" stroke="#00C8FF" strokeWidth="2.5" strokeLinejoin="round"/>
            <text x="22" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">W</text>
          </svg>
        </div>
        <div className="logo-text">Wings<span>Telecommunication Services</span></div>
      </Link>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/careers" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Careers</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>

      <button className="nav-cta" onClick={() => { closeMenu(); navigate('/contact'); }}>Get Quote</button>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

export default Navbar;
