import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '5+', label: 'Projects' },
  { icon: FiAward, value: '2+', label: 'Years Coding' },
  { icon: FiUsers, value: '10+', label: 'Team Led' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Avatar & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-56 h-56 rounded-[40px] overflow-hidden border-2 border-[#D7E2EA]/20">
              <img src="/fahmi-face.jpg" alt="Fahmi Ghozali" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl"
            >
              <span className="text-xs text-gray-300">💻 Full Stack Dev</span>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass p-4 rounded-2xl text-center hover:bg-white/10 transition-all"
              >
                <Icon className="text-[#D7E2EA] mx-auto mb-2" size={24} />
                <div className="text-2xl font-black gradient-text">{value}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-strong p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            I'm <span className="gradient-text">Fahmi Ghozali</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            D3 Informatics Management student at Politeknik Negeri Lampung. I build backends
            with Node.js and SQL, mobile apps with Flutter, and serverless systems on Cloudflare.
            I care about API testing, database design, and code that does not break.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            When I'm not coding, I love exploring new technologies, contributing to
            open-source projects, and sharing my knowledge with the developer community.
            I believe in writing code that not only works but is also maintainable and scalable.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['Name', 'Fahmi Ghozali'],
              ['Email', 'fahmighozali740@gmail.com'],
              ['Location', 'Bandar Lampung, Indonesia'],
              ['Status', 'Available'],
            ].map(([key, val]) => (
              <div key={key}>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{key}</span>
                <p className={`text-sm font-medium mt-1 ${val === 'Available' ? 'text-green-400' : 'text-white'}`}>
                  {val}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
