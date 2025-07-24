import React from 'react'
import "./Hero.css"
import profile_img from"../../assets/profile_img1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id="home" className="hero">
        <img src={profile_img} alt=""/>
        <h1><span>I'm  Aayush Kumar Jha,</span> Full Stack Web Developer .</h1>
        <p>As a Full Stack Web Developer , my portfolio showcases a collection of dynamic and responsive web applications built using MongoDB, Express.js, React.js, and Node.js. It highlights my proficiency in full-stack development, including front-end design, back-end API creation, database integration, and deployment.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
     
          <div className="hero-resume">My Resume</div>
            
        </div>
      
    </div>
  )
}

export default Hero
