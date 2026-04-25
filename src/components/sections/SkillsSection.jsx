import SectionTitle from '../common/SectionTitle.jsx'

function SkillsSection({
  skillGroups,
  activeSkillGroup,
  selectedSkillGroup,
  additionalSkills,
  certificates,
  onSelectSkillGroup,
}) {
  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow="Skill Explorer"
        title="Interactive overview of the stack I use across backend, frontend, database, and delivery work."
        description="Use the category filters to explore the areas I work with most."
      />

      <div className="skills-layout">
        <div className="chip-group" data-reveal>
          {Object.entries(skillGroups).map(([key, group]) => (
            <button
              key={key}
              className={`chip ${activeSkillGroup === key ? 'active' : ''}`}
              type="button"
              onClick={() => onSelectSkillGroup(key)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <article className="glass-card skill-showcase" data-reveal>
          <div className="skill-showcase-head">
            <span className="eyebrow">{selectedSkillGroup.label}</span>
            <h3>{selectedSkillGroup.description}</h3>
          </div>

          <div className="skill-list">
            {selectedSkillGroup.items.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="soft-grid">
        <article className="glass-card" data-reveal>
          <h3>Additional Strengths</h3>
          <ul className="clean-list">
            {additionalSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="glass-card" data-reveal>
          <h3>Certificates</h3>
          <ul className="clean-list">
            {certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default SkillsSection
