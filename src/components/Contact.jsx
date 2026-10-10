import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { LiquidButton } from './ui/liquid-glass-button'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'fahmighozali740@gmail.com',
    gradient: 'from-[#646973] to-[#BBCCD7]',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+62 822-8190-6869',
    gradient: 'from-[#646973] to-[#BBCCD7]',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Bandar Lampung, Indonesia',
    gradient: 'from-[#646973] to-[#BBCCD7]',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title hero-heading">Contact Me</h2>
        <p className="section-subtitle">Let's work together</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass-strong p-8 rounded-3xl mb-6">
            <h3 className="text-2xl font-bold text-white mb-3">Let's Talk! 👋</h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out.
              I'm always open to discussing new opportunities and ideas.
            </p>
          </div>

          {contactInfo.map(({ icon: Icon, label, value, gradient }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                <p className="text-white font-medium mt-0.5">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-3xl space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block capitalize">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder={field === 'name' ? 'Your Name' : 'your@email.com'}
                    className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none border border-white/10 focus:border-[#D7E2EA]/50 transition-all text-sm"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none border border-white/10 focus:border-[#D7E2EA]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none border border-white/10 focus:border-[#D7E2EA]/50 transition-all text-sm resize-none"
              />
            </div>

            <LiquidButton
              type="submit"
              disabled={sending || sent}
              size="lg"
              className="w-full text-white font-semibold"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : sent ? (
                '✅ Message Sent!'
              ) : (
                <>
                  <FiSend size={18} />
                  Send Message
                </>
              )}
            </LiquidButton>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
