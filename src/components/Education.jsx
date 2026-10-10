import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook } from 'react-icons/fi'

const educations = [
  {
    institution: 'Politeknik Negeri Lampung',
    degree: 'D3 Manajemen Informatika',
    period: '2024 – 2027 (est.)',
    gpa: 'Semester 5',
    description: 'Focus: SQL Programming, Mobile Development (Flutter), System Analysis, Backend & Database.',
    gradient: 'from-[#646973] to-[#BBCCD7]',
    icon: '🎓',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">Education</h2>
        <p className="section-subtitle">My academic background</p>
      </motion.div>

      <div className="grid gap-6">
        {educations.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-strong p-6 rounded-3xl flex flex-col sm:flex-row gap-6 items-start hover:border-[#D7E2EA]/30 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
              {edu.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="glass text-xs px-3 py-1.5 rounded-lg text-gray-400 block">{edu.period}</span>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <FiBook size={12} className="text-gray-500" />
                    <span className="text-xs text-gray-500">GPA: <span className="text-[#D7E2EA] font-semibold">{edu.gpa}</span></span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
