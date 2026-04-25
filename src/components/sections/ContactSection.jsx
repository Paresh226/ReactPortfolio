import SectionTitle from '../common/SectionTitle.jsx'

function getCopyButtonText(copiedField, fieldName, defaultLabel) {
  if (copiedField === fieldName) {
    return 'Copied'
  }

  if (copiedField === `${fieldName}-failed`) {
    return 'Failed'
  }

  return defaultLabel
}

function ContactSection({ portfolio, copiedField, onCopy }) {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s build something useful, secure, and easy to maintain."
        description="If you are hiring for .NET, backend, or web development work, I would be glad to connect."
      />

      <div className="contact-grid">
        <article className="glass-card contact-card" data-reveal>
          <span className="eyebrow">Email</span>
          <h3>{portfolio.contact.email}</h3>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${portfolio.contact.email}`}>
              Send Email
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => onCopy('email', portfolio.contact.email)}
            >
              {getCopyButtonText(copiedField, 'email', 'Copy')}
            </button>
          </div>
        </article>

        <article className="glass-card contact-card" data-reveal>
          <span className="eyebrow">Phone</span>
          <h3>{portfolio.contact.phone}</h3>
          <div className="contact-actions">
            <a className="btn btn-primary" href="tel:+917972866545">
              Call Now
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => onCopy('phone', portfolio.contact.phone)}
            >
              {getCopyButtonText(copiedField, 'phone', 'Copy')}
            </button>
          </div>
        </article>

        <article className="glass-card contact-card" data-reveal>
          <span className="eyebrow">LinkedIn</span>
          <h3>Professional Profile</h3>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={portfolio.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Open Profile
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => onCopy('linkedin', portfolio.contact.linkedin)}
            >
              {getCopyButtonText(copiedField, 'linkedin', 'Copy Link')}
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ContactSection
