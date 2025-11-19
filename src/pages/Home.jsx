import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Skills, Highlights, ProjectsPreview, Testimonials } from '../components/Sections'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${API}/api/projects?featured=true`).then(r => r.json()).then(setProjects).catch(() => {})
    fetch(`${API}/api/testimonials`).then(r => r.json()).then(setTestimonials).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <Hero />
      <main className="relative">
        <Skills />
        <Highlights />
        <ProjectsPreview projects={projects} />
        <Testimonials items={testimonials} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">© {new Date().getFullYear()} Your Name — Built with care.</footer>
    </div>
  )
}
