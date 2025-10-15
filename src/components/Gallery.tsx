import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = [
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Living room'
    },
    {
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Master bedroom'
    },
    {
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Guest bedroom'
    },
    {
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dining room'
    },
    {
      url: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kitchen'
    },
    {
      url: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bathroom'
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
