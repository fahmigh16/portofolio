import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Sertifikat', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActive(href.replace('#', ''))
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 mx-4 mt-3 rounded-2xl' : 'py-5 px-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="text-2xl font-black hero-heading cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          F.
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'bg-[#D7E2EA]/20 text-[#D7E2EA]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 glass rounded-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 mx-4 glass rounded-2xl overflow-hidden"
          >
            <ul className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
