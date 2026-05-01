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
          <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="21,2 40,12 40,30 21,40 2,30 2,12" fill="#0F1F3D" stroke="#00C8FF" strokeWidth="1.5"/>
            <text x="21" y="27" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Rajdhani,sans-serif">W</text>
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
