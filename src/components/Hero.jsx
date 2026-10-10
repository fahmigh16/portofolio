import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowDown } from 'react-icons/fi'
import { LiquidButton } from './ui/liquid-glass-button'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/fahmigh16', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/fahmighozali', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/fahmighozali', label: 'Twitter' },
]

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Available for work</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] md:text-[12vw] lg:text-[10vw]"
        >
          Hi, I&apos;m Fahmi
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-[#D7E2EA] uppercase tracking-wide mb-6"
        >
          Backend Developer & Quality Engineering
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          I build reliable backends with Node.js, SQL, and Flutter. Focused on system quality, API testing, and database design.
        </motion.p>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex justify-center mb-10"
        >
          <img
            src="/fahmi-face.jpg"
            alt="Fahmi portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] object-cover rounded-[40px] border-2 border-[#D7E2EA]/20"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <LiquidButton
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="text-white font-semibold"
          >
            View My Work
          </LiquidButton>
          <LiquidButton size="lg" onClick={() => window.open('/CV-Fahmi-Ghozali.pdf', '_blank')} className="text-white font-semibold">
            <FiDownload size={18} />
            Download CV
          </LiquidButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#D7E2EA] transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <FiArrowDown size={24} />
        </motion.div>
      </div>
    </div>
  )
}
