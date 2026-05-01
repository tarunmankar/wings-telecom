import React, { useEffect } from 'react';

function Contact() {
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
      alert("Thank you for your inquiry. Our enterprise sales team will contact you within 24 hours.");
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
      <div className="contact-layout">
        <div className="contact-info">
          <div className="sec-tag">Get In Touch</div>
          <div className="sec-title" style={{marginBottom:'44px',fontSize:'36px'}}>Let's <span className="hl">Build</span> Together.</div>
          <div className="ci-item"><div className="lbl">Company</div><div className="val">Wings Telecommunication Services</div></div>
          <div className="ci-item"><div className="lbl">Managing Director</div><div className="val">Ravneet Kaur Rajpal</div></div>
          <div className="ci-item"><div className="lbl">Project Management</div><div className="val">Aayush Kumar</div></div>
          <div className="ci-item"><div className="lbl">Operations</div><div className="val">All India</div></div>
          <div className="ci-item"><div className="lbl">Phone</div><div className="val"><a href="tel:+918770554404">+91 877 055 4404</a></div></div>
          <div className="ci-item"><div className="lbl">Email</div><div className="val"><a href="mailto:wingstelecommunicationservices@gmail.com">wingstelecommunicationservices@gmail.com</a></div></div>
          <div className="ci-item"><div className="lbl">Services</div><div className="val" style={{fontSize:'14px',color:'var(--muted)'}}>Installation · Dismantling · Scrap Management · Solar</div></div>
          <div style={{marginTop:'40px',padding:'22px',background:'rgba(0,200,255,0.06)',border:'1px solid rgba(0,200,255,0.15)',borderRadius:'10px'}}>
            <div style={{fontSize:'10px',color:'var(--cyan)',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'6px'}}>Response Time</div>
            <div style={{fontSize:'22px',fontFamily:'var(--font-display)',fontWeight:700}}>Within 24 Hours</div>
            <div style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>For all project inquiries and quotes</div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="sec-tag">Send a Message</div>
          <div className="sec-title" style={{fontSize:'34px',marginBottom:'32px'}}>Project <span className="hl">Inquiry</span></div>
          <form name="contact" onSubmit={handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-row">
              <div className="fg"><label>Your Name</label><input type="text" name="name" placeholder="Full name" required /></div>
              <div className="fg"><label>Phone Number</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
            </div>
            <div className="fg"><label>Email Address</label><input type="email" name="email" placeholder="your@email.com" /></div>
            <div className="fg"><label>Service Required</label>
              <select name="service" required>
                <option value="">Select a service...</option>
                <option value="Installation">Network Equipment Installation</option>
                <option value="Dismantling">Dismantling, Packing &amp; Shifting</option>
                <option value="Scrap">Scrap Management</option>
                <option value="Solar">Solar Panel Installation</option>
                <option value="Survey">Site Survey &amp; Planning</option>
                <option value="Multiple">Multiple Services</option>
              </select>
            </div>
            <div className="form-row">
              <div className="fg"><label>Location / State</label><input type="text" name="location" placeholder="City, State" /></div>
              <div className="fg"><label>Number of Sites</label><input type="number" name="sites" placeholder="Approx. count" /></div>
            </div>
            <div className="fg"><label>Project Details</label><textarea name="details" placeholder="Describe your project requirements, timeline, and specific needs..." required></textarea></div>
            <button type="submit" className="btn-primary" style={{width:'100%',padding:'16px',fontSize:'17px'}} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry →"}
            </button>
            <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'14px',textAlign:'center'}}>Your information is kept confidential. We respond within 24 hours.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
