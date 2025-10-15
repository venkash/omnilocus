import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L6 14L6 26L26 26L26 14L16 6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              <path d="M13 26V19H19V26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            </svg>
            <span>OMNILOCUS</span>
          </div>
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
