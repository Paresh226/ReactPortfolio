import SectionTitle from '../common/SectionTitle.jsx'

function AboutSection({ portfolio }) {
  return (
    <section className="section" id="about">
      <SectionTitle
        eyebrow="About Me"
        title="A backend-strong developer who enjoys turning business needs into reliable web applications."
        description={portfolio.summary}
      />

      <div className="strength-grid">
        {portfolio.strengths.map((item, index) => (
          <article
            key={item.title}
            className="glass-card strength-card"
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="card-index">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
