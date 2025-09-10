import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container" id='contact'>
      
      <div className="footer-main">
        <h1 className="footer-title">Contact</h1>

        <h4 className='footer-con'>
          <i className="fa-solid fa-envelope" style={{ color: '#6c63ff' }}></i>
          <span>Email : evijay669@gmail.com</span>
        </h4>

        <h4 className='footer-con'>
          <i className="fa-solid fa-phone" style={{ color: '#6c63ff' }}></i>
          <span>Phone : +91 6374126778</span>
        </h4>

        <h4 className='footer-con'>
          <i className="fa-solid fa-location-dot" style={{ color: '#6c63ff' }}></i>
          <span>Location : Chennai, Tamil Nadu</span>
        </h4>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className='footer-copy'>© 2024 Vijay. All rights reserved.</p>
        <h4 className='footer-design'>Designed & Built by Vijay</h4>
      </div>
    </div>
  )
}

export default Footer
