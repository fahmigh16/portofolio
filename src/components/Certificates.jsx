import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX, FiZoomIn } from 'react-icons/fi'

const certificates = [
  {
    title: 'International UI/UX Design Competition — ITechno Cup 2026',
    issuer: 'HIMATIK Politeknik Negeri Jakarta',
    date: 'Agu – Sep 2026',
    img: 'itechno-cup-2026-uiux.png',
    verify: null,
  },
  {
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding',
    date: 'Des 2025',
    img: 'dicoding-backend-pemula-js.png',
    verify: 'https://dicoding.com/certificates/1OP8JE1KLPQK',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    date: 'Des 2025',
    img: 'dicoding-dasar-js.png',
    verify: 'https://dicoding.com/certificates/98XWOYYYLZM3',
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding',
    date: 'Nov 2025',
    img: 'dicoding-cloud-genai-aws.png',
    verify: 'https://dicoding.com/certificates/6RPNGJQ08Z2M',
  },
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    date: 'Nov 2025',
    img: 'dicoding-dasar-ai.png',
    verify: 'https://dicoding.com/certificates/98XWO001LZM3',
  },
  {
    title: 'Getting Started with Data',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2026',
    img: 'ibm-getting-started-with-data.png',
    verify: 'https://www.credly.com/badges/2837e85a-40bf-40b1-b2fc-b87ec93d4e12',
  },
  {
    title: 'Unleashing the Power of AI Agents',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2026',
    img: 'ibm-ai-agents.png',
    verify: null,
  },
  {
    title: 'Classifying Data Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2026',
    img: 'ibm-classifying-data-granite.png',
    verify: null,
  },
  {
    title: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    date: 'Agu 2025',
    img: 'ibm-code-generation-granite.png',
    verify: 'https://www.credly.com/badges/91f9c341-ef96-45ad-a5b7-81fa085fec3f',
  },
  {
    title: 'PKKMB 2024 (Lulus)',
    issuer: 'Politeknik Negeri Lampung',
    date: 'Agu 2024',
    img: 'pkkmb-polinela-2024.png',
    verify: null,
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <div ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title gradient-text">Sertifikat</h2>
        <p className="section-subtitle">Courses and credentials I've earned — click to zoom</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.img}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
            className="glass-strong rounded-3xl overflow-hidden hover:border-[#D7E2EA]/30 transition-all duration-300 flex flex-col group"
          >
            <button
              onClick={() => setSelected(cert)}
              className="relative overflow-hidden cursor-zoom-in"
            >
              <img
                src={`/certificates/${cert.img}`}
                alt={cert.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <FiZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-white leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{cert.issuer} • {cert.date}</p>
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-300 mt-auto"
                >
                  <FiExternalLink size={14} /> Verifikasi
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-11 right-0 flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium"
              >
                <FiX size={20} /> Tutup
              </button>
              <img
                src={`/certificates/${selected.img}`}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white font-semibold mt-3">{selected.title}</p>
              <p className="text-center text-gray-400 text-sm">{selected.issuer} • {selected.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
