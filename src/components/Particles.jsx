import { useEffect, useRef } from 'react'

export default function Particles({ density = 60 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = 400

    const particles = new Array(density).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.5,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(0, 188, 212, 0.7)'
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => { w = canvas.width = window.innerWidth }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [density])

  return (
    <div className="relative w-full">
      <canvas ref={ref} className="w-full h-[400px] opacity-40" />
    </div>
  )
}
