import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wr d-f">
        <div>
          <h3 className="footer-bl-title"><span>/</span>About us</h3>
          <p className="footer-bl-desc">
            The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.
          </p>
          <p className="footer-copyright">&copy;2021 All rights reserved. BankHotel</p>
        </div>
        <div>
          <h3 className="footer-bl-title"><span>/</span>News</h3>
          <p className="footer-bl-desc">
            Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.
          </p>
          <form action="" className="footer-fm d-f jc-sb align-center">
            <input type="email" name="email" placeholder='Email' />
            <button type="button" className='btn-clear d-b'><img src="/images/arrow-right2.png" alt="arrow-right2" /></button>
          </form>
        </div>
        <div>
          <h3 className="footer-bl-title"><span>/</span>Social</h3>
          <div className="footer-social d-f">
            <a href="" className="footer-social-link">Facebook</a>
            <a href="" className="footer-social-link">Instagram</a>
            <a href="" className="footer-social-link">Twiitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer