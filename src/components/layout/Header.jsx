const themeLabels = {
  dark: 'Moon',
  light: 'Light',
}

function Header({
  name,
  role,
  sections,
  activeSection,
  theme,
  onThemeToggle,
  onNavigate,
  email,
}) {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <span className="brand-mark">PP</span>
        <span>
          <strong>{name}</strong>
          <small>{role}</small>
        </span>
      </a>

      <nav className="nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            type="button"
            onClick={() => onNavigate(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="topbar-actions">
        <button className="theme-toggle" type="button" onClick={onThemeToggle}>
          {themeLabels[theme]}
        </button>
        <a className="btn btn-primary" href={`mailto:${email}`}>
          Hire Me
        </a>
      </div>
    </header>
  )
}

export default Header
