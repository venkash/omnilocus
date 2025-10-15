import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import VirtualTour from './components/VirtualTour'
import Gallery from './components/Gallery'
import StyleQuiz from './components/StyleQuiz'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <BeforeAfter />
      <VirtualTour />
      <Gallery />
      <Services />
      <StyleQuiz />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
