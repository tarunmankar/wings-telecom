import React, { useEffect } from 'react';

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-container">
      <div className="services-hero">
        <div className="sec-tag">What We Do</div>
        <div className="sec-title">Our <span className="hl">Core</span> Services</div>
        <p style={{marginTop:'18px',fontSize:'16px',color:'var(--muted)',maxWidth:'580px',lineHeight:1.75}}>End-to-end telecom field services delivered with precision, safety, and speed — across towers, networks, and solar infrastructure.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">

          <div className="service-icon">🔧</div>
          <h3>Network Equipment Installation</h3>
          <p>Complete installation of BTS, RRU, antennas, cables, and associated network hardware on telecom towers. From ground-up new installations to upgrade projects — executed with precision and safety compliance.</p>
          <div className="service-tags">
            <span className="service-tag">BTS Installation</span>
            <span className="service-tag">RRU Setup</span>
            <span className="service-tag">Antenna Mounting</span>
            <span className="service-tag">Cable Routing</span>
          </div>
        </div>
        <div className="service-card">

          <div className="service-icon">📦</div>
          <h3>Dismantling, Packing & Shifting</h3>
          <p>Professional dismantling of existing network equipment with careful packing and safe transportation. Ideal for network upgrades, operator migrations, and site decommissioning projects.</p>
          <div className="service-tags">
            <span className="service-tag">Safe Dismantling</span>
            <span className="service-tag">Equipment Packing</span>
            <span className="service-tag">Site Shifting</span>
            <span className="service-tag">Migration Projects</span>
          </div>
        </div>
        <div className="service-card">

          <div className="service-icon">♻️</div>
          <h3>Scrap Management</h3>
          <p>Organized collection, segregation, and responsible disposal of telecom scrap material. Fully compliant with environmental and regulatory guidelines. Documentation provided for all scrap handled.</p>
          <div className="service-tags">
            <span className="service-tag">Material Sorting</span>
            <span className="service-tag">Eco Disposal</span>
            <span className="service-tag">Documentation</span>
            <span className="service-tag">Compliance</span>
          </div>
        </div>
        <div className="service-card">

          <div className="service-icon">☀️</div>
          <h3>Solar Panel Installation</h3>
          <p>End-to-end solar energy solutions for telecom tower sites. Panel installation, wiring, inverter setup, and commissioning — helping operators reduce diesel dependency and energy costs.</p>
          <div className="service-tags">
            <span className="service-tag">Panel Installation</span>
            <span className="service-tag">Inverter Setup</span>
            <span className="service-tag">Commissioning</span>
            <span className="service-tag">Green Energy</span>
          </div>
        </div>
        <div className="service-card">

          <div className="service-icon">🛡️</div>
          <h3>EHS & Safety Standards</h3>
          <p>All field operations are conducted under strict EHS protocols. Certified safety equipment, trained crew, daily safety briefings, and incident-free track record across all project sites.</p>
          <div className="service-tags">
            <span className="service-tag">Safety Certified</span>
            <span className="service-tag">PPE Compliant</span>
            <span className="service-tag">Risk Assessment</span>
            <span className="service-tag">Zero Incident Policy</span>
          </div>
        </div>
        <div className="service-card">

          <div className="service-icon">📡</div>
          <h3>Site Survey & Planning</h3>
          <p>Pre-installation site surveys, structural feasibility checks, and detailed project planning. We ensure every installation is planned to perfection before a single bolt is turned.</p>
          <div className="service-tags">
            <span className="service-tag">Site Survey</span>
            <span className="service-tag">Feasibility Study</span>
            <span className="service-tag">Project Planning</span>
            <span className="service-tag">Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
