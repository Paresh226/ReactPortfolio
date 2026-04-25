function Footer({ name }) {
  return (
    <footer className="footer-note" data-reveal>
      <p>
        Designed and built as a React static portfolio for <strong>{name}</strong>.
      </p>
    </footer>
  )
}

export default Footer
