import SectionTitle from '../common/SectionTitle.jsx'

function EducationSection({ education, interests }) {
  return (
    <section className="section" id="education">
      <SectionTitle
        eyebrow="Education"
        title="Academic foundation built around computer applications and strong performance."
        description="My education reflects a steady progression in computer applications with consistently good results."
      />

      <div className="education-grid">
        {education.map((item, index) => (
          <article
            key={`${item.title}-${item.period}`}
            className="glass-card education-card"
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="eyebrow">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.school}</p>
            <strong>{item.score}</strong>
          </article>
        ))}
      </div>

      <article className="glass-card interests-card" data-reveal>
        <h3>Interests</h3>
        <div className="interest-list">
          {interests.map((item) => (
            <span key={item} className="interest-pill">
              {item}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}

export default EducationSection
