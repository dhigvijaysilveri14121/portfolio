import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-mark">SD</span>
          <span>{profile.shortName}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href={`mailto:${profile.email}`}>
            Hire Me
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>
  )
}
