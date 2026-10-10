import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/fahmigh16', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/fahmighozali', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/fahmighozali', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-2xl font-black hero-heading">F.</span>
            <p className="text-gray-500 text-sm mt-1">Fahmi Ghozali</p>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Made with <FiHeart className="text-pink-500" size={14} /> by Fahmi
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#D7E2EA] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
