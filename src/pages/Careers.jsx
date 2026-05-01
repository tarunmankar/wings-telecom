import React, { useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      alert("Your resume has been submitted successfully. If your profile aligns with our requirements, our HR team will contact you shortly.");
      e.target.reset();
    })
    .catch((error) => {
      alert("An error occurred. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="page page-container">
      <AnimatedSection className="services-hero">
        <div className="sec-tag">Join Our Team</div>
        <div className="sec-title">Build Your Career<br/>in <span className="hl">Telecom & Solar</span></div>
        <p style={{marginTop:'18px',fontSize:'16px',color:'var(--muted)',maxWidth:'580px',lineHeight:1.75}}>
          Wings Telecommunication Services is growing rapidly. We are looking for passionate field engineers, technicians, and solar experts to join our industry-leading team.
        </p>
      </AnimatedSection>

      <section>
        <AnimatedSection>
          <div className="sec-tag">Current Openings</div>
          <div className="sec-title" style={{marginBottom:'40px'}}>Open <span className="hl">Positions</span></div>
        </AnimatedSection>
        
        <div className="why-grid">
          <AnimatedSection delay={0.1} className="why-card">
            <div className="why-icon">📡</div>
            <h3>Telecom Field Engineer</h3>
            <p><strong>Experience:</strong> 2-5 Years<br/><strong>Location:</strong> All India</p>
            <p style={{marginTop:'10px'}}>Responsible for installation, commissioning, and maintenance of BTS and RRU equipment across tower sites.</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="why-card">
            <div className="why-icon">☀️</div>
            <h3>Solar Installation Technician</h3>
            <p><strong>Experience:</strong> 1-3 Years<br/><strong>Location:</strong> All India</p>
            <p style={{marginTop:'10px'}}>Expertise in mounting solar panels, wiring, and inverter commissioning for telecom towers.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="why-card">
            <div className="why-icon">🔧</div>
            <h3>Dismantling & Rigger Expert</h3>
            <p><strong>Experience:</strong> 3+ Years<br/><strong>Location:</strong> All India</p>
            <p style={{marginTop:'10px'}}>Specialist in safe dismantling of heavy telecom equipment and packing for shifting. EHS certification mandatory.</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="contact-layout" style={{minHeight:'auto'}}>
        <AnimatedSection className="contact-info">
          <div className="sec-tag">Why Wings?</div>
          <div className="sec-title" style={{marginBottom:'24px',fontSize:'36px'}}>Life at <span className="hl">Wings</span></div>
          <p style={{fontSize:'15px', color:'var(--muted)', lineHeight:1.8, marginBottom: '20px'}}>
            We believe in empowering our team members with the best tools, rigorous safety training, and continuous learning opportunities. Working with us means being at the forefront of India's network infrastructure growth.
          </p>
          <ul className="about-list" style={{margin:0}}>
            <li>Competitive salary & performance bonuses</li>
            <li>Comprehensive health & safety insurance</li>
            <li>Continuous technical training (OEMs)</li>
            <li>Clear career progression paths</li>
            <li>Strict adherence to EHS & Employee Safety</li>
          </ul>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="contact-form-wrap">
          <div className="sec-tag">Apply Now</div>
          <div className="sec-title" style={{fontSize:'34px',marginBottom:'32px'}}>Submit <span className="hl">Application</span></div>
          <form name="careers" onSubmit={handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="careers" />
            <div className="form-row">
              <div className="fg"><label>Full Name</label><input type="text" name="name" placeholder="John Doe" required /></div>
              <div className="fg"><label>Phone Number</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
            </div>
            <div className="fg"><label>Email Address</label><input type="email" name="email" placeholder="your@email.com" required/></div>
            <div className="form-row">
              <div className="fg"><label>Position Applying For</label>
                <select name="position" required>
                  <option value="">Select a position...</option>
                  <option value="Field Engineer">Telecom Field Engineer</option>
                  <option value="Solar Tech">Solar Installation Technician</option>
                  <option value="Rigger">Dismantling & Rigger Expert</option>
                  <option value="Other">Other / General Application</option>
                </select>
              </div>
              <div className="fg"><label>Years of Experience</label><input type="number" name="experience" placeholder="e.g. 3" required /></div>
            </div>
            <div className="fg"><label>Resume Link (Google Drive / LinkedIn)</label><input type="url" name="resume" placeholder="https://..." required /></div>
            <div className="fg"><label>Cover Letter / Summary</label><textarea name="summary" placeholder="Tell us briefly about your experience..." required></textarea></div>
            <button type="submit" className="btn-primary" style={{width:'100%',padding:'16px',fontSize:'17px'}} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application →"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Careers;
