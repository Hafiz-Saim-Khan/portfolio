import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa6";

import React from 'react'

const About = () => {
  return (
    <div>
       <div className="about-pg">
          <div id="left-section">
            <div><img src="pasport-size-photo.jpg"  /></div>
           <div id="profile-item"> <p><b>Name :</b> Saim Khan</p>
            <p><b>Email :</b> abc@gmail.com</p>
            <p><b>Phone :</b> 12356789</p>
            <p><b>Address :</b> random loction</p></div>
          </div>
          <div id="right-section">
          <h2 id="about-hg">About Me</h2>
          <p id="about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem minus illo mollitia. Cupiditate repellendus cum, necessitatibus nihil quod quidem!</p>
          </div>

      </div>


      <footer>
        <div id="first-portion">
          <p id="footer-paragraph">Email : exampleemail@gmail.com</p>
          <p id="footer-paragraph">Phone : 12345678</p>
          <p id="footer-paragraph">Address : abcd road Karachi</p>
        </div>
        <div id="second-portion">
          <section id="logo-1">
          <p id="face"><FaFacebook /></p><p>Random id</p></section>
          <br /><br />
          <section id="logo-1">
          <p><FaInstagramSquare /></p><p>Random id</p></section>
          <br /><br />
          <section id="logo-1">
          <p><BsLinkedin /></p><p>Random id</p></section>
        </div>
      </footer>
    </div>
  )
}

export default About
