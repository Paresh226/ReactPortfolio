import profilePhoto from '../../assets/profile-photo.png'

function HeroSection({ portfolio, onNavigate }) {
  return (
    <section className="hero" data-reveal>
      <div className="hero-copy">
        <span className="eyebrow">Personal Portfolio</span>
        <h1>Building secure web experiences with .NET, SQL, and modern frontend work.</h1>
        <p>{portfolio.intro}</p>

        <div className="hero-actions">
          <button className="btn btn-primary" type="button" onClick={() => onNavigate('contact')}>
            Let&apos;s Connect
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => onNavigate('experience')}>
            View Experience
          </button>
        </div>

        <div className="hero-meta">
          <span>{portfolio.location}</span>
          <span>{portfolio.contact.email}</span>
          <span>{portfolio.contact.phone}</span>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-photo-card">
          <img
            className="hero-photo"
            src={profilePhoto}
            alt={`${portfolio.name} profile`}
          />
          <div className="hero-photo-badge">
            <span>Web Developer</span>
            <strong>{portfolio.name}</strong>
          </div>
        </div>
      </div>

      <div className="hero-highlights">
        <div className="hero-card floating-card">
          <span className="hero-card-label">Current Focus</span>
          <strong>Enterprise .NET applications with React integration</strong>
          <p>
            Clean backend architecture, practical frontend delivery, and performance-focused
            database work.
          </p>
        </div>

        <div className="stats-grid">
          {portfolio.stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
