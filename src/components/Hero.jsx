import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power3.out',
      });
      gsap.from('.hero-title-line span', {
        opacity: 0, y: 60, stagger: 0.12, duration: 1, delay: 0.4, ease: 'power4.out',
      });
      gsap.from('.hero-desc', {
        opacity: 0, y: 20, duration: 0.8, delay: 0.85, ease: 'power3.out',
      });
      gsap.from('.hero-cta', {
        opacity: 0, y: 20, duration: 0.8, delay: 1.05, ease: 'power3.out',
      });
      gsap.from('.hero-stats', {
        opacity: 0, y: 20, duration: 0.8, delay: 1.2, ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="hero" className="section hero">
      {/* Glow orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open for Freelance Work
        </div>

        <h1 className="hero-title">
          <div className="hero-title-line"><span>Hi, I'm</span></div>
          <div className="hero-title-line"><span>Vivek Kori.</span></div>
        </h1>

        <p className="hero-desc">
          Building <strong>clean</strong>, <strong>fast</strong>, and <strong>modern</strong> digital experiences.<br />
          <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>Open to Opportunities.</span>
        </p>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#portfolio')}
          >
            View Portfolio
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#contact')}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('#about')} style={{ cursor: 'pointer', position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
        <ChevronDown size={36} className="animated-arrow" />
      </div>
    </section>
  );
}
