import React from 'react'
import "./Footer.css"
import footer_logo from"../../assets/footer_logo.svg"
import user_icon from"../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=""/>
                <p>I am a fullStack Developer from, India I am doing internship from some companiews..</p>
            </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon}  alt=""/>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p classNae="footer-bottom-left">@ 2025 Aayush kumar jha. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
