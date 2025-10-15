import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L4 16V36H16V26H24V36H36V16L20 4Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="18" r="2" fill="#2c5f2d"/>
              <rect x="28" y="20" width="4" height="6" fill="#2c5f2d"/>
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
