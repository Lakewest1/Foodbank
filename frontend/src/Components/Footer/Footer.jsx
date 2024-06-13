import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.Grova} alt="" className='Grova' />
          <p>We remain the online best Food bank in your territory,Our customers is our major priority and credibility.We have been into this Ecommerce for more than 3years.Our delivery is fast and cheap</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
          
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2348179343765</li>
            <li>olamila95@gmail.com</li>
          </ul>
          
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>Copyright 2024 @ ismail Olalekan |L@kewe$st| .All Right Reserved.</p>
        
      </div>

      
      
    </div>
  )
}

export default Footer
