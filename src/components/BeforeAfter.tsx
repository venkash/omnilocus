import { useState } from 'react'
import './BeforeAfter.css'

function BeforeAfter() {
  const comparisons = [
    {
      before: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Living Room'
    },
    {
      before: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Master Bedroom'
    },
    {
      before: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dining Area'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section className="before-after">
      <div className="before-after-container">
        <div className="before-after-header">
          <h2>See The Transformation</h2>
          <p>Drag the slider to see how staging brings properties to life</p>
        </div>

        <div className="comparison-tabs">
          {comparisons.map((comp, index) => (
            <button
              key={index}
              className={`tab-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {comp.title}
            </button>
          ))}
        </div>

        <div className="slider-container">
          <div className="image-comparison">
            <div className="comparison-wrapper">
              <img
                src={comparisons[activeIndex].after}
                alt="After staging"
                className="comparison-image after-image"
              />
              <div
                className="before-overlay"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={comparisons[activeIndex].before}
                  alt="Before staging"
                  className="comparison-image before-image"
                />
              </div>
              <div
                className="slider-line"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-handle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2"/>
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="slider-input"
            />
          </div>
          <div className="comparison-labels">
            <span className="label-before">Before</span>
            <span className="label-after">After</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
