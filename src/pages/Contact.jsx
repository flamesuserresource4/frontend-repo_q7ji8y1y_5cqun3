import { useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Let’s connect</h1>
        {loading && <Loader label="Sending..." />}
        {!done ? (
          <form onSubmit={submit} className="space-y-3">
            <input required placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <textarea required placeholder="Message" rows={6} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-900 font-semibold shadow-lg hover:brightness-110 transition">Send</button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">Thanks! I’ll get back to you soon.</div>
        )}
        <div className="mt-10 text-sm text-zinc-400">
          Prefer to schedule? <a className="text-cyan-300" href="#book">Book a call</a>. Or email me at <a className="text-cyan-300" href="mailto:hello@example.com">hello@example.com</a>.
        </div>
      </main>
    </div>
  )
}
