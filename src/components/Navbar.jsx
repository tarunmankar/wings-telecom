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
        <img src="/logo.png" alt="Wings Telecom Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
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
