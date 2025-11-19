import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/60 to-zinc-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-cyan-300 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Available for freelance
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m Your Name
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Developer • Freelancer • Problem Solver</span>
          </h1>
          <p className="mt-6 text-zinc-300 max-w-xl">
            I build fast, accessible, and delightful digital products. From idea to production — web apps, design systems, and everything in between.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-900 font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300/10 transition">Book a call</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
