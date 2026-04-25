import SectionTitle from '../common/SectionTitle.jsx'

function ExperienceSection({ experience }) {
  return (
    <section className="section" id="experience">
      <SectionTitle
        eyebrow="Experience"
        title="Hands-on work building secure and scalable applications in real company environments."
        description="My professional journey so far has focused on backend delivery, API integration, debugging, and frontend support."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.period}`}
            className="timeline-card glass-card"
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="timeline-meta">
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <ul className="clean-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
