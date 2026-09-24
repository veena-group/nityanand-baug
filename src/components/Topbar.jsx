import { useEffect, useState } from 'react'
import { tapHover } from '../motion'
import MotionLink from './MotionLink'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#flats', label: 'Flats' },
  { href: '#shops', label: 'Shops' },
  { href: '#registration', label: 'Registration' },
  { href: '#committee', label: 'Committee' },
  { href: '#contact', label: 'Contact' },
]

function Topbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      let current = '#home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = `#${id}`
        }
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className={`topbar${isScrolled ? ' topbar--solid' : ''}${isOpen ? ' is-open' : ''}`}>
      <div className="topbar__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img className="brand__mark" src="/images/logo.png" alt="Nityanand Baug CHS Ltd logo" />
          <span className="brand__text">Nityanand Baug</span>
        </a>

        <nav className={`topbar__nav${isOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={`topbar__link${activeSection === link.href ? ' topbar__link--active' : ''}`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <MotionLink
            className="btn btn--accent topbar__cta"
            to="/login"
            onClick={closeMenu}
            {...tapHover}
          >
            Member Login
          </MotionLink>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
        </button>
      </div>
    </header>
  )
}

export default Topbar
