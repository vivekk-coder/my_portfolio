import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <div className="logo" onClick={() => scrollTo('#hero')} style={{ cursor: 'pointer' }}>
          VK
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download="Vivek_Kori_Resume.pdf"
          className="contact-btn"
          style={{ textDecoration: 'none' }}
        >
          Download CV
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="mobile-nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Vivek_Kori_Resume.pdf"
            className="contact-btn"
            style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
