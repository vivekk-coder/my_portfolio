import { useState } from 'react';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';
import portfolioV1Img from '../assets/portfolio_v1.png';
import amazonImg from '../assets/amazon_clone.png';
import vaultImg from '../assets/secure_vault.png';

const projects = [
  {
    id: 1,
    title: 'Portfolio v1',
    desc: 'My first personal portfolio website built with pure HTML, CSS & a touch of JavaScript. Features a smooth typing animation, skills section, and project showcase.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    link: 'https://vivek-portfolio01.netlify.app/',
    color: '#8b5cf6',
    image: portfolioV1Img,
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Amazon Clone',
    desc: 'A pixel-perfect Amazon homepage clone built with HTML & CSS. Replicates the navbar, hero banner, and product grid layout from scratch.',
    tags: ['HTML', 'CSS'],
    category: 'Web',
    link: 'https://ecomm-xp.netlify.app/',
    color: '#f59e0b',
    image: amazonImg,
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Secure Data Vault',
    desc: 'A responsive web app for securely storing and managing sensitive data entries. Built with HTML, CSS & JavaScript with a clean dark UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    link: 'https://secure-data.netlify.app/',
    color: '#06b6d4',
    image: vaultImg,
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Next Project',
    desc: 'Something exciting is in the works. Stay tuned!',
    tags: ['React', 'Node.js', '?'],
    category: 'Web',
    link: '#',
    color: '#a855f7',
    image: null,
    comingSoon: true,
  },
];

const categories = ['All', 'Web', 'Java', 'Other'];

/* ── Coming Soon Card ────────────────────────────── */
function ComingSoonCard({ project }) {
  return (
    <div
      className="project-card coming-soon-card"
      style={{ '--card-accent': project.color }}
    >
      {/* Animated glow orb */}
      <div className="cs-orb" />

      {/* Pulsing icon area */}
      <div className="cs-icon-wrap">
        <div className="cs-icon-ring cs-ring-1" />
        <div className="cs-icon-ring cs-ring-2" />
        <div className="cs-icon-ring cs-ring-3" />
        <div className="cs-icon-center">
          <Code2 size={28} />
        </div>
      </div>

      {/* Badge */}
      <div className="cs-badge">
        <Sparkles size={12} />
        <span>Coming Soon</span>
      </div>

      <h3 className="cs-title">Next Project</h3>

      {/* Animated dots */}
      <p className="cs-subtitle">
        Something exciting is in the works
        <span className="cs-dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </p>

      {/* Hint tags */}
      <div className="cs-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="cs-tag">{tag}</span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="cs-progress-wrap">
        <div className="cs-progress-label">
          <span>In Progress</span>
          <span>🔥</span>
        </div>
        <div className="cs-progress-track">
          <div className="cs-progress-fill" />
        </div>
      </div>
    </div>
  );
}

/* ── Regular Project Card ─────────────────────────── */
function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      style={{ '--card-accent': project.color }}
    >
      {/* Screenshot Preview */}
      <div className="project-card-image">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-ss"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-ss-overlay"
        >
          <ExternalLink size={20} />
          <span>Visit Site</span>
        </a>
      </div>

      {/* Top accent bar */}
      <div className="project-card-bar" />

      <div className="project-card-body">
        <div className="project-card-header">
          <span className="project-cat-badge">{project.category}</span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-ext-link"
            aria-label="View Project"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-view-btn"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

/* ── Main Section ─────────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="portfolio-orb" />

      <div className="section-header" style={{ textAlign: 'center' }}>
        <span className="section-tag">My Work</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-sub">
          A collection of projects I've built with HTML, CSS, JavaScript & React.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab${active === cat ? ' filter-tab--active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {filtered.map((project) =>
          project.comingSoon
            ? <ComingSoonCard key={project.id} project={project} />
            : <ProjectCard key={project.id} project={project} />
        )}
      </div>
    </section>
  );
}
