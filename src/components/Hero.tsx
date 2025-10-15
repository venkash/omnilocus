import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">OMNILOCUS</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Property Into a Buyer's Dream</h1>
          <p>Professional home staging services in Houston, TX. We bring your space to life with expertly curated furniture and decor that helps properties sell faster and for more.</p>
          <a href="#contact" className="hero-button">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
