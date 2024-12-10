import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa6";


import React from 'react'

const Projects = () => {
  return (
    <div>
      <h3 id="projects">My Projects</h3>




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

export default Projects
