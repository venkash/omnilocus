import './About.css'

function About() {

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
            With years of experience serving the Greater Houston area, we understand the local market and what
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
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Beautifully staged living room"
          />
        </div>
      </div>
    </section>
  )
}

export default About
