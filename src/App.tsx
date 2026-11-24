import { About } from './components/About'
import { AmbientBackground } from './components/AmbientBackground'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { PointerEffect } from './components/PointerEffect'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import './App.css'

export default function App() {
  return (
    <>
      <AmbientBackground />
      <PointerEffect />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
