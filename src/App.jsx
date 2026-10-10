import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FlowArt, { FlowSection } from './components/ui/story-scroll'

function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <Navbar />
      <FlowArt aria-label="Portfolio story">
        <FlowSection id="home" aria-label="Home" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Hero /></FlowSection>
        <FlowSection id="about" aria-label="About" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><About /></FlowSection>
        <FlowSection id="skills" aria-label="Skills" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Skills /></FlowSection>
        <FlowSection id="projects" aria-label="Projects" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Projects /></FlowSection>
        <FlowSection id="experience" aria-label="Experience" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Experience /></FlowSection>
        <FlowSection id="education" aria-label="Education" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Education /></FlowSection>
        <FlowSection id="certificates" aria-label="Certificates" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Certificates /></FlowSection>
        <FlowSection id="contact" aria-label="Contact" style={{ backgroundColor: '#0C0C0C', color: '#fff' }}><Contact /></FlowSection>
      </FlowArt>
      <Footer />
    </div>
  )
}

export default App
