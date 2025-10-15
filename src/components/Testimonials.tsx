import { useState, useEffect } from 'react'
import './Testimonials.css'

interface Testimonial {
  id: number
  name: string
  location: string
  property: string
  rating: number
  review: string
  soldIn: string
  priceIncrease: string
  image: string
}

function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Martinez',
      location: 'Memorial, Houston',
      property: '4-Bedroom Estate',
      rating: 5,
      review: 'Omnilocus transformed our home into a showpiece. We received multiple offers within the first week and sold for 18% above asking price. Their attention to detail and understanding of what buyers want is unmatched.',
      soldIn: '8 days',
      priceIncrease: '+18%',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'The Heights, Houston',
      property: '3-Bedroom Townhome',
      rating: 5,
      review: 'After sitting on the market for 3 months, we hired Omnilocus. The transformation was incredible. Within two weeks of staging, we had 5 showings and 3 offers. Best investment we made in the selling process.',
      soldIn: '14 days',
      priceIncrease: '+15%',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Jennifer Adams',
      location: 'River Oaks, Houston',
      property: 'Luxury 5-Bedroom',
      rating: 5,
      review: 'Professional, creative, and results-driven. Omnilocus staged our luxury home with sophisticated elegance. The photography was stunning and showings were booked back-to-back. Sold above asking in record time.',
      soldIn: '11 days',
      priceIncrease: '+22%',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Montrose, Houston',
      property: '2-Bedroom Condo',
      rating: 5,
      review: 'I was skeptical about staging, but Omnilocus proved me wrong. They made my small condo feel spacious and modern. Got an offer the first weekend and sold at full asking price. Highly recommend their services.',
      soldIn: '5 days',
      priceIncrease: '+12%',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Real results from real estate professionals and homeowners</p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-nav prev" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>

              <p className="testimonial-text">"{currentTestimonial.review}"</p>

              <div className="testimonial-stats">
                <div className="stat">
                  <span className="stat-value">{currentTestimonial.soldIn}</span>
                  <span className="stat-label">Sold In</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{currentTestimonial.priceIncrease}</span>
                  <span className="stat-label">Above Asking</span>
                </div>
              </div>

              <div className="testimonial-author">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} />
                <div className="author-info">
                  <h4>{currentTestimonial.name}</h4>
                  <p>{currentTestimonial.property}</p>
                  <span>{currentTestimonial.location}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="slider-nav next" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
