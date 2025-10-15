import { useState, useEffect } from 'react'
import './About.css'

function About() {
  const images = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Elevate Your Property's Appeal</h2>
          <p>
            At Omnilocus, we specialize in transforming vacant properties into inviting, market-ready homes.
            Our expert staging services help buyers envision themselves living in the space, leading to faster
            sales and higher offers.
          </p>
          <p>
            With years of experience serving the Cypress, TX area, we understand the local market and what
            buyers are looking for. From modern minimalist to classic elegance, we create stunning spaces
            that highlight your property's best features.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">85%</div>
              <div className="stat-label">Faster Sales</div>
            </div>
            <div className="stat">
              <div className="stat-number">20%</div>
              <div className="stat-label">Higher Offers</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Homes Staged</div>
            </div>
          </div>
          <a href="#contact" className="about-button">Get Started Today</a>
        </div>
        <div className="about-image">
          <img
            src={images[currentImageIndex]}
            alt="Beautifully staged living room"
            key={currentImageIndex}
          />
        </div>
      </div>
    </section>
  )
}

export default About
