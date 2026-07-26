import { Mail } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/vivekk-coder', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/vivek-kori/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:vivakkori64@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">VK</div>
          <p>Building clean, fast, and modern digital experiences. Open to opportunities.</p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <span className="footer-col-title">Navigation</span>
          <div className="footer-col-links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="footer-nav-btn"
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <span className="footer-col-title">Connect</span>
          <div className="footer-col-links">
            <a href="mailto:vivakkori64@gmail.com">vivakkori64@gmail.com</a>
            <a href="https://github.com/vivekk-coder" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vivek-kori/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vivek Kori. All rights reserved.</p>
        <div className="social-icons">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
