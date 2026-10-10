import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Backend',
    color: 'from-[#646973] to-[#BBCCD7]',
    skills: [
      { name: 'Node.js', desc: 'Bangun backend chatbot LabCare + integrasi 9router LLM dengan retry logic' },
      { name: 'SQL / Database Design', desc: 'Rancang skema chat_sessions, kb_documents, relasi movies-genres; optimasi query search' },
      { name: 'API Testing', desc: 'Uji endpoint POST /api/agent/chat + order-status via Postman sampai stabil' },
      { name: 'Cloudflare Workers + D1', desc: 'Deploy Kantor Agent serverless pakai Wrangler, lengkap dengan fallback logic' },
      { name: 'Python', desc: 'Bangun QR menu Kimi Coffeehouse (stdlib + SQLite): /pay, upload bukti, unduh struk' },
    ],
  },
  {
    title: 'Mobile',
    color: 'from-[#646973] to-[#BBCCD7]',
    skills: [
      { name: 'Flutter / Dart', desc: 'Bangun katalog film: daftar, detail, pencarian, dan fitur favorit' },
      { name: 'SQLite / sqflite', desc: 'Persistensi lokal dengan relasi movies, genres, movie_genres, favorites' },
      { name: 'State Management', desc: 'Debug sinkronisasi state favorit dan data lokal' },
      { name: 'REST API Client', desc: 'Konsumsi API backend dari aplikasi mobile' },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-[#646973] to-[#BBCCD7]',
    skills: [
      { name: '9router LLM', desc: 'Integrasi model AI sebagai provider LLM dengan tuning reasoning + max_tokens' },
      { name: 'Git / GitHub', desc: 'Version control semua proyek, kolaborasi tim kampus' },
      { name: 'Wrangler', desc: 'Deploy dan monitoring Cloudflare Workers + D1' },
      { name: 'Postman', desc: 'Testing dan dokumentasi endpoint API' },
      { name: 'VS Code', desc: 'Editor utama sehari-hari' },
    ],
  },
]

function SkillItem({ name, desc, delay }) {
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
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">My Skills</h2>
        <p className="section-subtitle">What I've actually done with each</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, catIdx) => (
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
            {cat.skills.map((skill, i) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                desc={skill.desc}
                delay={catIdx * 0.1 + i * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
