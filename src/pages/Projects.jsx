import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import { motion, AnimatePresence } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('All')

  useEffect(() => {
    setLoading(true)
    fetch(`${API}/api/projects?featured=false`).then(r => r.json()).then(json => {
      setData(json)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const tags = useMemo(() => ['All', ...Array.from(new Set(data.flatMap(p => p.tech || [])))], [data])

  const filtered = useMemo(() => data.filter(p => {
    const matchQ = q ? (p.title + ' ' + p.description).toLowerCase().includes(q.toLowerCase()) : true
    const matchTag = tag === 'All' ? true : (p.tech || []).includes(tag)
    return matchQ && matchTag
  }), [data, q, tag])

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search projects" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <div className="flex gap-2 overflow-x-auto">
            {tags.map(t => (
              <button key={t} onClick={() => setTag(t)} className={`px-3 py-1 rounded-lg text-sm border ${tag===t?'bg-cyan-400/10 text-cyan-300 border-cyan-400/30':'bg-white/5 border-white/10 text-zinc-300'}`}>{t}</button>
            ))}
          </div>
        </div>

        {loading ? <Loader label="Fetching projects" /> : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.a key={p.slug || i} href={p.live_url || p.repo_url || '#'} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: i*0.03 }} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/40">
                  <div className="aspect-video bg-gradient-to-tr from-zinc-800 to-zinc-700" style={{ backgroundImage: p.image ? `url(${p.image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-zinc-300 text-sm mt-1 line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tech || []).slice(0,6).map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  )
}
