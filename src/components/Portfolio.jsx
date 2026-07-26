import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// 4 placeholder cards — user will add links & details later
const projects = [
  {
    id: 1,
    title: 'Project One',
    desc: 'Description coming soon. Click "View Project" to visit the live link.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    link: '#', // <-- Replace with your actual link
    color: '#8b5cf6',
  },
  {
    id: 2,
    title: 'Project Two',
    desc: 'Description coming soon. Click "View Project" to visit the live link.',
    tags: ['Java'],
    category: 'Java',
    link: '#', // <-- Replace with your actual link
    color: '#ec4899',
  },
  {
    id: 3,
    title: 'Project Three',
    desc: 'Description coming soon. Click "View Project" to visit the live link.',
    tags: ['Python', 'C++'],
    category: 'Other',
    link: '#', // <-- Replace with your actual link
    color: '#06b6d4',
  },
  {
    id: 4,
    title: 'Animation Web',
    desc: 'A premium architectural showcase with GSAP-powered horizontal scroll animations, smooth transitions, and a glassmorphism dark-mode UI.',
    tags: ['React', 'GSAP', 'Vite'],
    category: 'Web',
    link: 'https://github.com/vivekk-coder',
    color: '#f59e0b',
  },
];

const categories = ['All', 'Web', 'Java', 'Other'];

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
          A collection of projects I've built. More coming soon!
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
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{ '--card-accent': project.color }}
          >
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
        ))}
      </div>
    </section>
  );
}
