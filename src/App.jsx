import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ContactSection from './components/sections/ContactSection.jsx'
import EducationSection from './components/sections/EducationSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import { portfolio } from './data/portfolio.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [activeSkillGroup, setActiveSkillGroup] = useState('backend')
  const [copiedField, setCopiedField] = useState('')
  const [activeSection, setActiveSection] = useState('about')

  const selectedSkillGroup = useMemo(
    () => portfolio.skillGroups[activeSkillGroup],
    [activeSkillGroup],
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const revealNodes = document.querySelectorAll('[data-reveal]')
    const sectionNodes = document.querySelectorAll('section[id]')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.16 },
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 },
    )

    revealNodes.forEach((node) => revealObserver.observe(node))
    sectionNodes.forEach((node) => sectionObserver.observe(node))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(label)
      window.setTimeout(() => setCopiedField(''), 1800)
    } catch {
      setCopiedField(`${label}-failed`)
      window.setTimeout(() => setCopiedField(''), 1800)
    }
  }

  return (
    <div className="shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Header
        name={portfolio.name}
        role={portfolio.role}
        sections={sections}
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        onNavigate={scrollToSection}
        email={portfolio.contact.email}
      />

      <main className="page" id="top">
        <HeroSection portfolio={portfolio} onNavigate={scrollToSection} />
        <AboutSection portfolio={portfolio} />
        <SkillsSection
          skillGroups={portfolio.skillGroups}
          activeSkillGroup={activeSkillGroup}
          selectedSkillGroup={selectedSkillGroup}
          additionalSkills={portfolio.additionalSkills}
          certificates={portfolio.certificates}
          onSelectSkillGroup={setActiveSkillGroup}
        />
        <ExperienceSection experience={portfolio.experience} />
        <EducationSection education={portfolio.education} interests={portfolio.interests} />
        <ContactSection
          portfolio={portfolio}
          copiedField={copiedField}
          onCopy={handleCopy}
        />
      </main>

      <Footer name={portfolio.name} />
    </div>
  )
}

export default App
