import React from "react";
import "./aboutme.css";
import Fade from 'react-reveal/Fade';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';
import {HiDocument} from 'react-icons/hi'



export default function AboutMe() {
  return (
    <div className="container a" id="aboutme">
      <div className="row justify-content-center">
        <h1 className="col-auto col-sm-auto col-md-auto">About Me</h1>
      </div>
      <div className="row justify-content-center mt-5">
      <Fade left="true" duration={500} delay={250} distance="30px">

          <div className="col-12 col-sm-12 col-md-4 align-self-start">
            <img src={require('../../assets/Home/hello.svg').default} className="img-fluid" alt="hello-Undraw-SVG"/>
            <div className="row justify-content-center mt-4">

              <a className='text-secondary fa-3x  m-1' href='https://www.linkedin.com/in/harshith-pendyala?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6nIx2DVQCS%2F4R4ICfESAQ%3D%3D' target='_blank' rel='noreferrer'><FaLinkedin/></a>
              <a className='text-secondary fa-3x  m-1' href='https://github.com/HarshithPendyala' target='_blank' rel='noreferrer'><FaGithubSquare/></a>
              <a className='text-secondary fa-3x  m-1' href="Harshith-Pendyala.pdf" target="_blank" rel="noreferrer" ><HiDocument/></a>          
            </div>
                
          </div>
      </Fade>
      <Fade right="true" duration={500} delay={250} distance="30px">

          <div className="col-12 col-sm-12 col-md-8 ">
            <h3 className="text-white mt-4"> Hi 👋, I'm Harshith</h3>
            <p className="desc">
            Ever since i was a kid, Technology has tickled my curious brain especially "Computer" and "The Internet".
            I was fascinated by the amazing applications which kept me glued to the computer and wanted to learn how to build them. This led me to do my Undergrad in Computer Engineering 
            which i completed in 2020 <i>(yes, in the middle of pandemic)</i>. 
            </p>
            <p className="desc">  
            I started playing around with HTML,CSS and JavaScript, which led me to discover how good it felt to make applications; to create somthing out of nothing.
            Later i got my hands dirty with React.js and a touch of backend development using Node.js. I quickly absorbed new concepts and put them use by building projects as often as i can.
            </p>
            <p className="desc">
              When I'm not coding, I'm usually playing badminton, reading interesting books, working out in the gym or tring out new recipe.  
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
