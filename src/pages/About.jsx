import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-200">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-invert">
        <h1>About</h1>
        <p>
          I’m a developer focused on crafting reliable, accessible products. I love turning complex problems into simple, elegant interfaces and robust systems.
        </p>
        <h2>Journey</h2>
        <p>
          From hacking together small scripts to shipping production-grade apps, I’ve worked across the stack — frontend, backend, cloud.
        </p>
        <h2>Philosophy</h2>
        <ul>
          <li>Clarity over cleverness</li>
          <li>Performance as a feature</li>
          <li>Small steps, consistent delivery</li>
        </ul>
      </main>
    </div>
  )
}
