import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { HeroAnimation } from '../components/HeroAnimation';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-container">
      <div className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow1"></div>
        <div className="hero-glow2"></div>
        <div className="hero-wrap">
          <AnimatedSection className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>All India Operations</div>
            <h1>Powering<br/><span className="hl">India's</span><br/>Network<br/>Infrastructure</h1>
            <p>Specialized telecom field services — equipment installation, dismantling, solar power &amp; scrap management. Trusted across 400+ tower sites.</p>
            <div className="hero-btns">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-outline">Request Quote</Link>
            </div>
          </AnimatedSection>
          <HeroAnimation />
        </div>
        <AnimatedSection delay={0.2} className="hero-stats">
          <div className="stat-item"><div className="stat-num">400+</div><div className="stat-label">Sites Completed</div></div>
          <div className="stat-item"><div className="stat-num">5+</div><div className="stat-label">Years Experience</div></div>
          <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">States Active</div></div>
          <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">EHS Compliant</div></div>
        </AnimatedSection>
      </div>

      <section>
        <AnimatedSection>
          <div className="sec-tag">Why Choose Wings</div>
          <div className="sec-title">Built for the <span className="hl">Field.</span><br/>Proven on Site.</div>
        </AnimatedSection>
        <div className="why-grid">
          <AnimatedSection delay={0.1} className="why-card"><div className="why-icon">🏗️</div><h3>Field Expertise</h3><p>Hands-on experience across 400+ telecom tower sites all over India and globally. We know the terrain, the equipment, and the timelines.</p></AnimatedSection>
          <AnimatedSection delay={0.2} className="why-card"><div className="why-icon">⚡</div><h3>Fast Deployment</h3><p>Rapid mobilization teams ready for installation, dismantling, or emergency field work. Minimal downtime, maximum efficiency.</p></AnimatedSection>
          <AnimatedSection delay={0.3} className="why-card"><div className="why-icon">🛡️</div><h3>EHS Standards</h3><p>Strict adherence to Environment, Health &amp; Safety protocols. Certified processes, trained workforce, zero-compromise safety culture.</p></AnimatedSection>
          <AnimatedSection delay={0.4} className="why-card"><div className="why-icon">☀️</div><h3>Solar Integration</h3><p>Full solar panel installation services for telecom tower sites — reducing operational costs and carbon footprint for clients.</p></AnimatedSection>
        </div>
      </section>

      <div className="clients-strip">
        <AnimatedSection className="label">Trusted by India's Leading Telecom Operators</AnimatedSection>
        <div className="logos-grid">
          {/* JIO */}
          <AnimatedSection delay={0.1} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg" alt="Reliance Jio Logo" style={{ width: 'auto', height: '36px', objectFit: 'contain', background: 'transparent' }} />
            <span>Reliance Jio</span>
          </AnimatedSection>

          {/* AIRTEL */}
          <AnimatedSection delay={0.2} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Airtel_logo.svg" alt="Bharti Airtel Logo" style={{ width: 'auto', height: '36px', objectFit: 'contain', background: 'transparent' }} />
            <span>Bharti Airtel</span>
          </AnimatedSection>

          {/* VI */}
          <AnimatedSection delay={0.3} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Vodafone_Idea_logo.svg" alt="Vodafone Idea Logo" style={{ width: 'auto', height: '40px', objectFit: 'contain', background: 'transparent' }} />
            <span>Vodafone Idea</span>
          </AnimatedSection>

          {/* BSNL */}
          <AnimatedSection delay={0.4} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/BSNL_Logo.svg" alt="BSNL Logo" onError={(e)=>{e.target.onerror = null; e.target.src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.bsnl.co.in&size=128"}} style={{ width: 'auto', height: '36px', objectFit: 'contain', background: 'transparent' }} />
            <span>BSNL</span>
          </AnimatedSection>

          {/* INDUS TOWERS */}
          <AnimatedSection delay={0.5} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Indus_Towers_logo.svg" alt="Indus Towers Logo" style={{ width: 'auto', height: '36px', objectFit: 'contain', background: 'transparent' }} />
            <span>Indus Towers</span>
          </AnimatedSection>

          {/* ATC */}
          <AnimatedSection delay={0.6} className="logo-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/American_Tower_Corporation_logo.svg" alt="ATC India Logo" style={{ width: 'auto', height: '36px', objectFit: 'contain', background: 'transparent' }} />
            <span>ATC India</span>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="cta-banner">
        <div>
          <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3vw,40px)',fontWeight:700,textTransform:'uppercase',color:'white',lineHeight:1.1}}>Ready to Start Your Project?</div>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.65)',marginTop:'8px'}}>Get a detailed quote within 24 hours. No obligation.</p>
        </div>
        <Link to="/contact" className="btn-primary">Contact Us Now →</Link>
      </AnimatedSection>
    </div>
  );
}

export default Home;
