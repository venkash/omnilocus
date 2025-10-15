import './Services.css'

function Services() {
  const services = [
    {
      title: '1 Bedroom',
      description: 'Perfect for apartments and condos. Complete staging with living room, bedroom, and dining essentials.',
      features: ['Living Room Setup', 'Bedroom Furnishing', 'Dining Area', 'Decor & Accessories']
    },
    {
      title: '2 Bedroom',
      description: 'Ideal for starter homes. Full staging including common areas and two bedrooms.',
      features: ['Complete Living Area', 'Two Bedroom Setups', 'Kitchen Styling', 'Bathroom Accessories']
    },
    {
      title: '3 Bedroom',
      description: 'Popular family home package. Comprehensive staging for maximum market appeal.',
      features: ['Master & Guest Bedrooms', 'Living & Dining Rooms', 'Home Office Setup', 'Full Home Styling']
    },
    {
      title: '4 Bedroom',
      description: 'Premium staging for luxury properties. Every room staged to perfection.',
      features: ['All Bedrooms Furnished', 'Multiple Living Spaces', 'Premium Decor', 'Outdoor Staging Available']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Staging Packages</h2>
          <p>Flexible solutions tailored to your property's needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="service-button">Learn More</a>
            </div>
          ))}
        </div>

        <div className="services-info">
          <div className="info-card">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional staging" />
            <div className="info-content">
              <h3>Why Choose Professional Staging?</h3>
              <p>Staged homes sell 88% faster and for 20% more than vacant properties. Make your investment count.</p>
              <a href="#contact" className="info-button">Start Today</a>
            </div>
          </div>
          <div className="info-card">
            <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Consultation" />
            <div className="info-content">
              <h3>Free Consultation Available</h3>
              <p>Not sure where to start? We offer complimentary consultations to assess your property's needs.</p>
              <a href="#contact" className="info-button">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
