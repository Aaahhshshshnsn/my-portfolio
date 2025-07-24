import React from "react"
import"./About.css"
import profile_img from"../../assets/profile_img2.jpg"
import theme_pattern from "../../assets/theme_pattern.svg"


const About=()=>{
    return(
        <div id="about"className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm an experienced Full Stack Web Developer  with a strong passion for building scalable, efficient, and user-friendly web applications. With hands-on expertise in both front-end and back-end technologies, I specialize in creating complete solutions—from designing intuitive user interfaces to developing powerful server-side logic and working with databases</p>
                <p>Hi! I'm a passionate and curious developer who loves turning ideas into reality through code. With a strong foundation in web development and problem-solving, I specialize in building responsive and user-friendly applications.</p>
            </div>


            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /> </div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "80%"}} /> </div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /> </div>
                <div className="about-skill"><p>Node JS</p><hr style={{width: "80%"}} /> </div>
                <div className="about-skill"><p>Express JS</p><hr style={{width: "70%"}} /> </div>
                <div className="about-skill"><p>Mongo DB</p><hr style={{width: "80%"}} /> </div>

            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Fresher</h1>  
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3</h1>
                <p>INTERNSHIPS</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>Coursework</h1>
                <p>SUCESSFULLY COMPLETED GOOGLE CYBERSECUTITY</p>
            </div>
            <hr/>
        
        </div>
       </div>
        
    )
}

export default About