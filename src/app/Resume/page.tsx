

import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa6";import React from 'react'

const Resume = () => {
  return (
    <div>
         <h1 id="my-resume">My Resume </h1>
          <div className="resume-container">


              {/* <!-- left-SECTION --> */}
         <div className="left-section">
            
             {/* <!-- PERSONAL-INFORMATION -->  */}
             <section id="personal-info">
                <h3>Personal Information</h3>
                <p><b>Name:</b>Saim Khan</p>
                <p><b>Phone: </b>12345678</p>
                <p id="Email"><b>Email:</b> <a href="mailto:xyz@gmail.com" target="-blank">exampleemail@gmail.com</a></p>
             </section>
             {/* <!-- EDUCATION-SECTION --> */}
              <section id="education">
                <h3>Education</h3>
                <p><b>Intermediate :</b> Ongoing</p>
                <p><b>Matriculation From :</b> St.Francis High School,KARACHI </p>
              </section>
              {/* <!-- SKILLS SECTION --> */}
               <section id="skills">
                <h3>Skills</h3>
                
                    <p id="ms-word">Ms Word</p>
                    <p id="ms-word">Html</p>
                    <p id="ms-word">CSS</p>
                    
                
            </section>
         
                {/* <!-- WORK EXPERIENCE SECTION --> */}
               <section id="work-experience">
                <h3>Work Experience</h3>
                <p>Seeking an opportunity as a fresh candidate to start my professiional career</p>
               </section>    
         </div>
        {/* <!-- right-SECTION --> */}
         <div className="right-section">
            <section id="objective">
                <h3 id="career">Career </h3>
                <p id="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!</p>
            </section>
            <section id="certification">
                <h3 id="career">certification</h3>
                <p><b>Artifical Intelligence,Web 3.0 & Metaverse:</b>From Governour House Karachi (Ongoing)</p>

            </section>
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

export default Resume
