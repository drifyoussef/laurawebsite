import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#raisons', label: 'Pourquoi je t’aime' },
  { href: '#raisons-de-vivre', label: '100 raisons de vivre' },
  { href: '#pour-toi', label: 'Pour toi' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__logo">
          Laura <span aria-hidden="true">♡</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
