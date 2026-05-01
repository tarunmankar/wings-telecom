import React, { useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-container">
      <div className="about-layout">
        <AnimatedSection className="about-visual">
          <div style={{ position: 'relative' }}>
            <div className="about-img-box">
              <svg width="220" height="300" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="110" y1="10" x2="60" y2="280" stroke="#00C8FF" strokeWidth="2.5" />
                <line x1="110" y1="10" x2="160" y2="280" stroke="#00C8FF" strokeWidth="2.5" />
                <line x1="110" y1="10" x2="110" y2="280" stroke="#1A6FD4" strokeWidth="1.5" strokeDasharray="6,5" />
                <line x1="68" y1="100" x2="152" y2="100" stroke="#00C8FF" strokeWidth="1.8" />
                <line x1="72" y1="160" x2="148" y2="160" stroke="#00C8FF" strokeWidth="1.8" />
                <line x1="77" y1="220" x2="143" y2="220" stroke="#00C8FF" strokeWidth="1.8" />
                <line x1="60" y1="280" x2="160" y2="280" stroke="#00C8FF" strokeWidth="3.5" />
                <circle cx="110" cy="10" r="7" fill="#00C8FF" />
                <circle cx="110" cy="10" r="13" fill="none" stroke="#00C8FF" strokeWidth="1" opacity="0.3" />
                <line x1="86" y1="12" x2="60" y2="38" stroke="#00C8FF" strokeWidth="1.8" />
                <line x1="134" y1="12" x2="160" y2="38" stroke="#00C8FF" strokeWidth="1.8" />
                <line x1="110" y1="3" x2="110" y2="-8" stroke="#00C8FF" strokeWidth="2" />
                <circle cx="70" cy="100" r="3" fill="#1A6FD4" />
                <circle cx="150" cy="100" r="3" fill="#1A6FD4" />
                <circle cx="73" cy="160" r="3" fill="#1A6FD4" />
                <circle cx="147" cy="160" r="3" fill="#1A6FD4" />
              </svg>
            </div>
            <div className="about-float">
              <div className="num">5+</div>
              <div className="lbl">Years Experience</div>
            </div>
          </div>

          <div style={{ marginTop: '48px', paddingLeft: '8px', paddingRight: '100px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '2px', lineHeight: '1.3' }}>
              Connecting the Nation's <br /><span style={{ color: 'var(--white)', fontWeight: 800 }}>Future</span>
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="about-text">
          <div className="sec-tag">About Wings</div>
          <div className="sec-title" style={{ marginBottom: '22px' }}>Connecting <span className="hl">India.</span><br />Empowering Growth.</div>
          
          <p style={{ fontSize: '16px', color: 'var(--white)', lineHeight: 1.7, marginBottom: '16px', fontWeight: 500 }}>
            Wings Telecommunication Services specializes in elite network equipment lifecycle management, solar installations, and seamless infrastructure expansion across India.
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px', marginTop: '12px' }}>
            <div style={{ background: 'rgba(0,200,255,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,200,255,0.1)' }}>
              <h4 style={{ color: 'var(--cyan)', fontSize: '18px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-display)' }}>Complete Telecom Solutions</h4>
              <p style={{ color: 'var(--light)', fontSize: '15px', lineHeight: '1.6' }}>Expert team dedicated to network device installation, safe site decommissioning, equipment dismantling, and rigorous preventive maintenance.</p>
            </div>
            <div style={{ background: 'rgba(26,111,212,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(26,111,212,0.1)' }}>
              <h4 style={{ color: 'var(--cyan)', fontSize: '18px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-display)' }}>Dedicated Solar Team</h4>
              <p style={{ color: 'var(--light)', fontSize: '15px', lineHeight: '1.6' }}>Separate, highly-trained division focused solely on solar panel installation and renewable energy integration for telecom sites.</p>
            </div>
          </div>

          <ul className="about-list" style={{ marginBottom: '40px' }}>
            <li>Operational across All India and globally — covering both urban zones and challenging rural terrains.</li>
            <li>Experienced with major telecom OEMs including Ericsson, Nokia, Huawei, and ZTE.</li>
            <li>Full EHS (Environment, Health, and Safety) and employee safety compliance maintained stringently on every project.</li>
          </ul>

          <div className="sec-tag">Leadership Team</div>
          <div className="sec-title" style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginBottom: '22px' }}>Led by <span className="hl">Experience</span></div>

          <p style={{ fontSize: '15px', color: '#98AAC4', lineHeight: 1.7, marginBottom: '24px' }}>Under the visionary leadership of our team, Wings Telecommunication Services operates with an exceptionally experienced group of professionals. We are deep experts in the entire lifecycle of telecom hardware.</p>

          <div style={{ background: 'rgba(0,200,255,0.08)', borderLeft: '3px solid var(--cyan)', padding: '18px 24px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '4px', color: 'white' }}>Ravneet Kaur Rajpal</h3>
            <div style={{ fontSize: '13px', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '12px' }}>Managing Director</div>
            <p style={{ fontSize: '15px', color: 'var(--light)', lineHeight: 1.7 }}>As the Managing Director of Wings Telecommunication Services, <strong>Ravneet Kaur Rajpal</strong> is the visionary force driving the company's nationwide operations and strategic growth. With a profound commitment to excellence and innovation, she steers the organization towards delivering world-class telecom infrastructure solutions. Under her dynamic leadership, Wings has established itself as a trusted partner for India's leading telecom operators, maintaining uncompromising standards in operational efficiency, safety, and sustainable business practices.</p>
          </div>

          <div style={{ background: 'rgba(26,111,212,0.1)', borderLeft: '3px solid var(--cyan)', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '4px' }}>Aayush Kumar</h3>
            <div style={{ fontSize: '13px', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '8px' }}>Project Manager</div>
            <p style={{ fontSize: '14px', color: 'var(--light)', lineHeight: 1.6 }}>With over <strong>5+ years of core experience</strong> in the telecom industry, Aayush Kumar is a telecom professional with proven expertise in leadership and team management. He excels at driving team performance, ensuring reliable service delivery, and maintaining operational efficiency. With a focus on collaboration and continuous improvement, he contributes to achieving strong business outcomes in dynamic environments.</p>
          </div>
        </AnimatedSection>
      </div>

      <div className="ehs-section">
        <AnimatedSection>
          <div className="sec-tag">Safety First</div>
          <div className="sec-title">EHS &amp; <span className="hl">Employee</span> Safety</div>
          <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.75 }}>Every Wings team member operates under certified EHS protocols. Safety is built into every step of every project.</p>
        </AnimatedSection>

        <div className="ehs-grid">
          <AnimatedSection delay={0.1} className="ehs-card"><div className="icon">🪖</div><h4>PPE Compliance</h4><p>Helmets, harnesses, gloves mandatory on all tower sites without exception.</p></AnimatedSection>
          <AnimatedSection delay={0.2} className="ehs-card"><div className="icon">📋</div><h4>Daily Briefings</h4><p>Pre-work safety meetings and toolbox talks conducted before every field operation.</p></AnimatedSection>
          <AnimatedSection delay={0.3} className="ehs-card"><div className="icon">🔥</div><h4>Hazard Assessment</h4><p>Systematic identification and control of workplace hazards before work commences.</p></AnimatedSection>
          <AnimatedSection delay={0.4} className="ehs-card"><div className="icon">🚑</div><h4>Emergency Ready</h4><p>First aid trained staff and emergency response plans in place at every site.</p></AnimatedSection>
          <AnimatedSection delay={0.5} className="ehs-card"><div className="icon">📊</div><h4>Incident Reporting</h4><p>Structured near-miss reporting system to continuously improve safety practices.</p></AnimatedSection>
          <AnimatedSection delay={0.6} className="ehs-card"><div className="icon">✅</div><h4>Certified Training</h4><p>All team members undergo regular safety training and certification before deployment.</p></AnimatedSection>
          <AnimatedSection delay={0.7} className="ehs-card"><div className="icon">♻️</div><h4>Waste Management</h4><p>Safe and compliant disposal of telecom scrap, batteries, and electronic waste.</p></AnimatedSection>
          <AnimatedSection delay={0.8} className="ehs-card"><div className="icon">🩺</div><h4>Health Checks</h4><p>Routine medical fitness evaluations for technicians performing high-altitude work.</p></AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default About;
