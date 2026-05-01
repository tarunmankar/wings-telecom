import React from 'react';
import { motion } from 'framer-motion';

export function HeroAnimation({ scale = 1.5 }) {
  return (
    <div className="hero-right" style={{ minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <div className="hero-anim-container" style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
        
        {/* Orbit Rings */}
        <motion.div 
          className="anim-circle anim-circle-3" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="anim-circle anim-circle-2" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="anim-circle anim-circle-1" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Glowing Orb */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '120px', height: '120px',
            background: 'radial-gradient(circle, rgba(0,200,255,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Futuristic Telecom Tower SVG */}
        <svg className="tower-svg" width="160" height="240" viewBox="0 0 160 240" fill="none">
          {/* Base structure */}
          <path d="M 50 240 L 70 80 L 90 80 L 110 240" stroke="url(#towerGrad)" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 80 80 L 80 30" stroke="#00C8FF" strokeWidth="4" />
          
          {/* X-Bracing */}
          <path d="M 55 200 L 105 200 M 62 140 L 98 140" stroke="rgba(26,111,212,0.6)" strokeWidth="2" />
          <path d="M 50 240 L 105 200 M 110 240 L 55 200" stroke="rgba(26,111,212,0.4)" strokeWidth="1.5" />
          <path d="M 55 200 L 98 140 M 105 200 L 62 140" stroke="rgba(26,111,212,0.4)" strokeWidth="1.5" />
          <path d="M 62 140 L 90 80 M 98 140 L 70 80" stroke="rgba(26,111,212,0.4)" strokeWidth="1.5" />
          
          {/* Antennas / Dishes */}
          <path d="M 70 60 L 50 50 L 50 70 Z" fill="url(#towerGrad)" opacity="0.8"/>
          <path d="M 90 50 L 110 40 L 110 60 Z" fill="url(#towerGrad)" opacity="0.8"/>
          
          {/* Top Beacon */}
          <circle cx="80" cy="25" r="4" fill="#FFFFFF" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="towerGrad" x1="80" y1="0" x2="80" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C8FF" />
              <stop offset="1" stopColor="#1A6FD4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Emitting Signals (Radar) */}
        <motion.div 
          className="radar-pulse"
          style={{ top: '25px', left: '140px' }}
          animate={{ scale: [1, 4], opacity: [0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="radar-pulse"
          style={{ top: '25px', left: '140px' }}
          animate={{ scale: [1, 4], opacity: [0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }}
        />

        {/* Floating Data Nodes */}
        <motion.div className="floating-node n1" animate={{ y: [-15, 15, -15] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="floating-node n2" animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="floating-node n3" animate={{ y: [-20, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="floating-node n4" animate={{ y: [-12, 12, -12] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />

        {/* Connecting Data Lines */}
        <motion.div 
          style={{
            position: 'absolute', width: '2px', height: '80px',
            background: 'linear-gradient(to top, transparent, var(--cyan))',
            top: '40px', left: '60px', opacity: 0.5, transform: 'rotate(45deg)'
          }}
          animate={{ opacity: [0, 0.8, 0], height: ['0px', '80px', '0px'] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          style={{
            position: 'absolute', width: '2px', height: '100px',
            background: 'linear-gradient(to bottom, transparent, var(--blue-light))',
            top: '80px', right: '60px', opacity: 0.5, transform: 'rotate(-30deg)'
          }}
          animate={{ opacity: [0, 0.8, 0], height: ['0px', '100px', '0px'] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />

      </div>
    </div>
  );
}
