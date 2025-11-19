import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Uses() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/uses`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Uses</h1>
        {!items ? <Loader /> : (
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-zinc-400">{it.category}</div>
                <div className="text-zinc-200 font-medium">{it.name}</div>
                {it.description && <div className="text-sm text-zinc-400">{it.description}</div>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
