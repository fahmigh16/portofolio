import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    company: 'Himpunan Jurusan TI',
    role: 'Head of Media & Information',
    period: '2024 – Present',
    location: 'Politeknik Negeri Lampung',
    color: 'from-[#646973] to-[#BBCCD7]',
    bullets: [
      'Led 10+ members managing digital communication and technical publications',
      'Streamlined information workflows for department news delivery',
      'Maintained digital assets and event documentation',
    ],
  },
  {
    company: 'Himpunan Prodi',
    role: 'Vice Head of Media & Information',
    period: '2024 – Present',
    location: 'Politeknik Negeri Lampung',
    color: 'from-[#646973] to-[#BBCCD7]',
    bullets: [
      'Coordinated cross-functional teams for digital asset maintenance',
      'Managed study program information distribution',
    ],
  },
  {
    company: 'LabCare Project',
    role: 'Backend & Database Developer',
    period: '2025 – 2026',
    location: 'Campus Project',
    color: 'from-[#646973] to-[#BBCCD7]',
    bullets: [
      'Built AI chatbot backend with 9router LLM and retry logic',
      'Designed chat_sessions and kb_documents schemas',
      'Tested POST /api/agent/chat endpoint for stability',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#646973] via-[#BBCCD7] to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="md:ml-16 relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[52px] top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} hidden md:block`} />

              <div className="glass-strong p-6 rounded-3xl hover:border-[#D7E2EA]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${exp.color}`}>
                      <FiBriefcase size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="glass text-xs px-3 py-1.5 rounded-lg text-gray-400 block">{exp.period}</span>
                    <span className="text-xs text-gray-500 mt-1 block">{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 flex-shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
