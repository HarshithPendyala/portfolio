import React from "react";
import "./AboutMe.css";
import Fade from 'react-reveal/Fade';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';
import {HiDocument} from 'react-icons/hi'



export default function AboutMe() {
  return (
    <div className="container a" id="aboutme">
      <div className="row justify-content-center b">
        <h1 className="col-auto col-sm-auto col-md-auto">About Me</h1>
      </div>
      <div className="row justify-content-center mt-5">
      <Fade left="true" duration={500} delay={250} distance="30px">

          <div className="col-12 col-sm-6 align-self-start">
            <img src={require('../../assets/Home/hello.svg').default} className="img-fluid" alt="hello-Undraw-SVG"/>
          </div>
      </Fade>
      <Fade right="true" duration={500} delay={250} distance="30px">

          <div className="col-12 col-sm about_me text-sm-left text-center">
            <h3 className="mt-4 font-weight-bold">A dedicated Front-end Developer based in Hyderabad 📍</h3>
            <p>
            As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Bootstrap. I excel in designing and maintaining responsive websites that offer a smooth user experience. 
            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
            I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.. 
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
