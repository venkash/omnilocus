import { useState } from 'react'
import './Gallery.css'

interface GalleryImage {
  url: string
  alt: string
  room: string
  style: string
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const images: GalleryImage[] = [
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern living room staging',
      room: 'living',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant bedroom setup',
      room: 'bedroom',
      style: 'classic'
    },
    {
      url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stylish dining area',
      room: 'dining',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Contemporary kitchen staging',
      room: 'kitchen',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cozy reading nook',
      room: 'living',
      style: 'rustic'
    },
    {
      url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Inviting entryway',
      room: 'other',
      style: 'classic'
    },
    {
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury master suite',
      room: 'bedroom',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern home office',
      room: 'office',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bright open concept',
      room: 'living',
      style: 'modern'
    },
    {
      url: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stylish bathroom design',
      room: 'bathroom',
      style: 'rustic'
    },
    {
      url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chic living space',
      room: 'living',
      style: 'classic'
    },
    {
      url: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant family room',
      room: 'living',
      style: 'classic'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Rooms' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'dining', label: 'Dining' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'office', label: 'Office' },
    { id: 'modern', label: 'Modern' },
    { id: 'classic', label: 'Classic' },
    { id: 'rustic', label: 'Rustic' }
  ]

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.room === activeFilter || img.style === activeFilter)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Work</h2>
          <p>See how we transform spaces into stunning showcases</p>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <p>No images found for this filter</p>
          </div>
        )}

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
