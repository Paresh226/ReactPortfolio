function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-copy" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionTitle
