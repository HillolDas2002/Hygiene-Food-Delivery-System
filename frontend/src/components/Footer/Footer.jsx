import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='logo'>
                    <img src={assets.logofoot} alt="" />
                    </div>
                    <p>NutriBite is a hygiene home-made food delivery company committed to bringing safe, clean, and nutritious meals right to your doorstep. We partner with certified kitchens and follow strict quality standards to ensure every bite you take is fresh, healthy, and prepared with care.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt=""  />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-333</li>
                        <li>contact@nutribite.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2924 @ NutriBite.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
