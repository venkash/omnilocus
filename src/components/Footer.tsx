import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>OMNILOCUS</h3>
            <p>Professional home staging services in Cypress, TX</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>19247 Goodnight Peak Trl</p>
            <p>Cypress, TX 77433</p>
            <p>(832) 408-1743</p>
            <p>omnilocustx@gmail.com</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <p>1 Bedroom Staging</p>
            <p>2 Bedroom Staging</p>
            <p>3 Bedroom Staging</p>
            <p>4 Bedroom Staging</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Omnilocus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
