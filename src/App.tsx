import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
