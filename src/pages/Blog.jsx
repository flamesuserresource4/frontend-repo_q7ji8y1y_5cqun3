import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/blog?published=true`).then(r => r.json()).then(setPosts).catch(() => setPosts([]))
  }, [])

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Blog</h1>
        {!posts ? <Loader /> : (
          <div className="space-y-6">
            {posts.map((p, i) => (
              <article key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h2 className="text-xl font-semibold text-white">{p.title}</h2>
                {p.excerpt && <p className="text-zinc-300 mt-2">{p.excerpt}</p>}
                <div className="text-sm text-zinc-400 mt-2">{(p.tags || []).join(' • ')}</div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
