import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
   <section className="footer">
    <div className="footer-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, cupiditate in dolores illo nisi repudiandae quasi cumque, ipsum sed eius temporibus ipsam vero? Nemo magni ex aliquid. Neque inventore quasi dolorem id voluptatibus natus deleniti vitae quibusdam! Harum, laboriosam non!</p>
<div className="footer-social-icon">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>

    <div className="footer-middle">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
    </div>

    <div className="footer-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 8851615793</li>
    <li>contact@foodapp.com</li>
</ul>
    </div>
   </section>
  )
}

export default Footer
