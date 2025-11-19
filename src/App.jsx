import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Guestbook from './pages/Guestbook'
import Uses from './pages/Uses'
import Bucket from './pages/Bucket'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guestbook" element={<Guestbook />} />
      <Route path="/uses" element={<Uses />} />
      <Route path="/bucket" element={<Bucket />} />
    </Routes>
  )
}

export default App
