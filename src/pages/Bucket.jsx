import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Bucket() {
  const [items, setItems] = useState(null)
  const [title, setTitle] = useState('')

  const load = () => fetch(`${API}/api/bucket`).then(r => r.json()).then(setItems)
  useEffect(() => { load() }, [])

  const add = async (e) => {
    e.preventDefault()
    await fetch(`${API}/api/bucket`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }) })
    setTitle('')
    load()
  }

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Bucket List</h1>
        <form onSubmit={add} className="flex gap-2 mb-6">
          <input required placeholder="Add item" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10" value={title} onChange={e => setTitle(e.target.value)} />
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-900 font-semibold">Add</button>
        </form>
        {!items ? <Loader /> : (
          <div className="space-y-3">
            {items.map((it, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-zinc-200 font-medium">{it.title}</div>
                  {it.notes && <div className="text-sm text-zinc-400">{it.notes}</div>}
                </div>
                {it.done && <span className="text-xs text-cyan-300">Done</span>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
