import { motion } from 'framer-motion'
import { Code2, Rocket, Zap, Star, Github, Globe, Quote } from 'lucide-react'

export function Skills() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'AWS']
  return (
    <section className="relative py-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Core skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-200 backdrop-blur hover:border-cyan-400/40">
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Highlights() {
  const items = [
    { icon: Rocket, title: 'Ship fast', desc: 'From idea to production-ready in days, not months.' },
    { icon: Zap, title: 'Performance', desc: 'Lighthouse A scores and Core Web Vitals green.' },
    { icon: Code2, title: 'Craft', desc: 'Clean code, accessible UI, and thoughtful UX.' },
  ]
  return (
    <section className="relative py-16" id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-400/40">
              <Icon className="text-cyan-400" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-zinc-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsPreview({ projects = [] }) {
  return (
    <section className="relative py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          <a href="/projects" className="text-cyan-300 hover:text-white">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.slug || i} href={p.live_url || p.repo_url || '#'} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/40">
              <div className="aspect-video bg-gradient-to-tr from-zinc-800 to-zinc-700" style={{ backgroundImage: p.image ? `url(${p.image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <div className="text-yellow-300 text-sm inline-flex items-center gap-1"><Star size={14}/> {p.stars ?? 0}</div>
                </div>
                <p className="text-zinc-300 text-sm mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.tech || []).slice(0,4).map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ items = [] }) {
  return (
    <section className="relative py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Quote className="text-yellow-300" />
              <p className="mt-3 text-zinc-300">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-zinc-400">— {t.name}{t.role ? `, ${t.role}` : ''}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
