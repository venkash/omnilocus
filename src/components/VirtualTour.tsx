import { useState } from 'react'
import './VirtualTour.css'

function VirtualTour() {
  const tours = [
    {
      id: 1,
      title: 'Luxury 4-Bedroom Estate',
      location: 'Memorial, Houston',
      thumbnail: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      stats: { beds: 4, baths: 3, sqft: 3200 }
    },
    {
      id: 2,
      title: 'Modern 3-Bedroom Home',
      location: 'The Heights, Houston',
      thumbnail: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      stats: { beds: 3, baths: 2, sqft: 2400 }
    },
    {
      id: 3,
      title: 'Contemporary 2-Bedroom Condo',
      location: 'Downtown, Houston',
      thumbnail: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      stats: { beds: 2, baths: 2, sqft: 1800 }
    }
  ]

  const [selectedTour, setSelectedTour] = useState(tours[0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleTourSelect = (tour: typeof tours[0]) => {
    setSelectedTour(tour)
    setIsVideoPlaying(false)
  }

  return (
    <section className="virtual-tour">
      <div className="virtual-tour-container">
        <div className="virtual-tour-header">
          <h2>Virtual Property Tours</h2>
          <p>Experience our staging work through immersive video walkthroughs</p>
        </div>

        <div className="tour-content">
          <div className="tour-main">
            <div className="video-wrapper">
              {!isVideoPlaying ? (
                <div className="video-thumbnail">
                  <img src={selectedTour.thumbnail} alt={selectedTour.title} />
                  <button
                    className="play-button"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="white" opacity="0.9"/>
                      <path d="M23 18L42 30L23 42V18Z" fill="#2c5f2d"/>
                    </svg>
                  </button>
                </div>
              ) : (
                <iframe
                  src={`${selectedTour.videoUrl}?autoplay=1`}
                  title={selectedTour.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="tour-info">
              <h3>{selectedTour.title}</h3>
              <p className="tour-location">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C5.79086 2 4 3.79086 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.79086 10.2091 2 8 2Z" stroke="#2c5f2d" strokeWidth="1.5"/>
                  <circle cx="8" cy="6" r="1.5" fill="#2c5f2d"/>
                </svg>
                {selectedTour.location}
              </p>
              <div className="tour-stats">
                <div className="stat-item">
                  <span className="stat-value">{selectedTour.stats.beds}</span>
                  <span className="stat-label">Bedrooms</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{selectedTour.stats.baths}</span>
                  <span className="stat-label">Bathrooms</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{selectedTour.stats.sqft}</span>
                  <span className="stat-label">Sq Ft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tour-list">
            <h4>More Tours</h4>
            {tours.map((tour) => (
              <div
                key={tour.id}
                className={`tour-item ${selectedTour.id === tour.id ? 'active' : ''}`}
                onClick={() => handleTourSelect(tour)}
              >
                <img src={tour.thumbnail} alt={tour.title} />
                <div className="tour-item-info">
                  <h5>{tour.title}</h5>
                  <p>{tour.location}</p>
                  <span className="tour-item-beds">{tour.stats.beds} Bed · {tour.stats.baths} Bath</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualTour
