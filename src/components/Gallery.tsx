import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = [
    {
      url: '/Living_Room1_Unfurnished.png',
      alt: 'Living Room 1 - Unfurnished'
    },
    {
      url: '/Living_Room1_Furnished.png',
      alt: 'Living Room 1 - Furnished'
    },
    {
      url: '/Living_Room2_Unfurnished.png',
      alt: 'Living Room 2 - Unfurnished'
    },
    {
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Modern bathroom - Before staging'
    },
    {
      url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Modern bathroom - After staging'
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Work</h2>
          <p>See how we transform spaces into stunning showcases</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
              <img src={selectedImage} alt="Full size view" />
            </div>
          </div>
        )}

        <div className="gallery-cta">
          <h3>Ready to Transform Your Property?</h3>
          <p>Let's create a space that sells itself</p>
          <a href="#contact" className="gallery-button">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
