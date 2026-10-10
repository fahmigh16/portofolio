import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle, FiGithub, FiExternalLink } from 'react-icons/fi'

const projectCategories = [
  {
    title: 'Web',
    color: 'from-[#646973] to-[#BBCCD7]',
    projects: [
      { name: 'LabCare AI Agent', desc: 'Campus facility reporting backend with AI chatbot, retry logic, and chat session database.', tags: ['Node.js', 'SQL', '9router LLM', 'API Testing'], github: 'https://github.com/fahmigh16/LabCare-Sistem-Pengaduan', live: '#' },
      { name: 'Kantor Agent', desc: 'Serverless multi-agent system on Cloudflare with fallback logic for API rate limits.', tags: ['Workers', 'D1', 'Wrangler', 'Automation'], github: '#', live: '#' },
      { name: 'KunjunganEdukasi', desc: 'Sistem informasi kunjungan edukasi — peran backend + database, proyek tim kampus.', tags: ['JavaScript', 'CSS', 'Backend'], github: 'https://github.com/fahmigh16/KunjunganEdukasi', live: '#' },
      { name: 'CariMakan App', desc: 'Web app pencarian tempat makan (HTML/CSS/JS).', tags: ['JavaScript', 'HTML', 'CSS'], github: 'https://github.com/fahmigh16/carimakan-app', live: '#' },
      { name: 'Kimi Coffeehouse QR Menu', desc: 'QR ordering system with payment proof upload, order status API, and admin QRIS settings.', tags: ['Python', 'SQLite', 'QR Menu'], github: '#', live: '#' },
    ],
  },
  {
    title: 'Mobile',
    color: 'from-[#646973] to-[#BBCCD7]',
    projects: [
      { name: 'Movie Catalog (Flutter)', desc: 'Offline-first film catalog with SQLite relations, real-time search, and favorites.', tags: ['Flutter', 'Dart', 'SQLite', 'Mobile'], github: '#', live: '#' },
    ],
  },
]

function ProjectItem({ name, desc, tags, github, live, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex gap-3 mb-5"
    >
      <FiCheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-white">{name}</p>
          <a href={github} aria-label={`${name} source`} className="text-gray-500 hover:text-[#D7E2EA] transition-colors">
            <FiGithub size={14} />
          </a>
          <a href={live} aria-label={`${name} live`} className="text-gray-500 hover:text-[#D7E2EA] transition-colors">
            <FiExternalLink size={14} />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(215,226,234,0.15)', color: '#D7E2EA', border: '1px solid rgba(215,226,234,0.3)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">My Projects</h2>
        <p className="section-subtitle">Things I've built</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: catIdx * 0.15 }}
            className="glass-strong p-6 rounded-3xl hover:border-[#D7E2EA]/30 transition-all duration-300"
          >
            <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${cat.color} text-white`}>
              {cat.title}
            </div>
            {cat.projects.map((project, i) => (
              <ProjectItem
                key={project.name}
                name={project.name}
                desc={project.desc}
                tags={project.tags}
                github={project.github}
                live={project.live}
                delay={catIdx * 0.1 + i * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
