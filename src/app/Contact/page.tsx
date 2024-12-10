import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa6";


import React from 'react'

const Contact = () => {
  return (
    <div>
       <h2 id="contact-heading">Contacts</h2>
        <div id="input-boxes">
          <div><input type="text"placeholder="Message" id="message" /></div>
          <div id="right-boxes">
        <input type="text"placeholder="Enter your name" id="input-type" />
        <input type="text"placeholder="Enter your email" id="input-type" />
        <input type="text"placeholder="Enter your phone number" id="input-type" />
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

export default Contact
