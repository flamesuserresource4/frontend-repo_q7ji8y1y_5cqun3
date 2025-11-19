import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Guestbook() {
  const [entries, setEntries] = useState([])
  const [form, setForm] = useState({ name: '', message: '' })
  const [loading, setLoading] = useState(true)

  const load = () => fetch(`${API}/api/guestbook`).then(r => r.json()).then(setEntries).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    await fetch(`${API}/api/guestbook`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setForm({ name: '', message: '' })
    load()
  }

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Guestbook</h1>
        <form onSubmit={submit} className="space-y-3 mb-6">
          <input required placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <textarea required placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-900 font-semibold">Sign</button>
        </form>
        {loading ? <Loader /> : (
          <div className="space-y-3">
            {entries.map((e, i) => (
              <div key={e.id || i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-zinc-400">{e.name}</div>
                <div className="text-zinc-200">{e.message}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
