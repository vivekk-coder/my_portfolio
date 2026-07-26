const skills = [
  { category: 'Frontend', icon: '🌐', items: ['HTML', 'CSS', 'JavaScript'] },
  { category: 'Backend / Languages', icon: '⚙️', items: ['Python', 'Java', 'C', 'C++'] },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-orb" />

      <div className="about-inner">
        {/* Left — Text */}
        <div className="about-text">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Software<br />
            <span className="gradient-text">Engineer</span>
          </h2>
          <p className="about-desc">
            Hii! I'm <strong>Vivek Kori</strong>, a Computer Science diploma graduate passionate about building responsive
            web applications and solving real-world problems through code.
          </p>
          <p className="about-desc">
            I work with Java, React, HTML, CSS, JavaScript, Git, GitHub
            and continuously explore modern web technologies and AI-powered development.
          </p>

          <div className="about-actions">
            <a href="/resume.pdf" download="Vivek_Kori_Resume.pdf" className="btn-primary" style={{ textDecoration: 'none' }}>
              Download Resume
            </a>
            <a
              href="https://github.com/vivekk-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right — Skills */}
        <div className="about-skills">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span className="skill-group-name">{group.category}</span>
              </div>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Info Card */}
          <div className="about-info-card">
            <div className="info-row">
              <span className="info-label">📍 Location</span>
              <span className="info-val">Uttar Pradesh, India</span>
            </div>
            <div className="info-row">
              <span className="info-label">🎯 Focus</span>
              <span className="info-val">Web & Software Dev</span>
            </div>
            <div className="info-row">
              <span className="info-label">📧 Email</span>
              <span className="info-val">vivakkori64@gmail.com</span>
            </div>
            <div className="info-row">
              <span className="info-label">🚀 Status</span>
              <span className="info-val" style={{ color: '#4ade80' }}>Available for Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
