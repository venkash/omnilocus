import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = [
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern living room staging'
    },
    {
      url: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern bathroom design'
    },
    {
      url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stylish dining area'
    },
    {
      url: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Contemporary kitchen staging'
    },
    {
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cozy reading nook'
    },
    {
      url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Inviting entryway'
    },
    {
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury master suite'
    },
    {
      url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern home office'
    },
    {
      url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bright open concept'
    },
    {
      url: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stylish bathroom design'
    },
    {
      url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chic living space'
    },
    {
      url: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant family room'
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
