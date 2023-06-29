import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { init } from 'ityped'
import { Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import copy from 'copy-to-clipboard';
import Fade from 'react-reveal/Fade';
import {HiDocument} from 'react-icons/hi'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import TechStackElement from "./TechStackElement";
import HTML from "../../images/html5.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import javascript from "../../images/javascript.png";
import css from "../../images/css.png";
import bootstrap from "../../images/bootstrap.png";



export default function Home() {
  return (
    <Container>
    <div className="home-container" id="home">
        <div className="row mt-5 align-items-center expand-md">
        <Fade bottom="true" duration={500} delay={250} distance="30px">

          <div className="col-12  col-md-6 font-weight-bolder name text-md-left text-center">
              <span>
              Front-End React Developer <i>👋</i>
              </span>
            <div className="row mt-5">
              <p className="col-12 col-sm-12 desc text-md-left text-center">
                  Hi, I'm Harshith Pendyala. A passionate Front-End React Developer based in Hyderabad, India.
              </p>
            </div>
            <div className="row links ">
              <a className='text-secondary fa-1x pl-3  mx-auto mx-md-0' href='https://www.linkedin.com/in/harshith-pendyala?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6nIx2DVQCS%2F4R4ICfESAQ%3D%3D' target='_blank' rel='noreferrer'><FaLinkedin/></a>
              <a className='text-secondary fa-1x  mx-auto mx-md-0' href='https://github.com/HarshithPendyala' target='_blank' rel='noreferrer'><FaGithubSquare/></a>
            </div>
          </div>
          </Fade>
          <Fade bottom="true" duration={500} delay={250} distance="30px">

          <div className="dev-img col-12 col-sm-6  mt-5 d-none d-md-block">
            <img src={require('../../assets/Home/developer.svg').default} className="img-fluid"  alt="developer-Undraw-SVG"/>
          </div>
        </Fade>
        </div>
        <Fade bottom="true" duration={500} delay={250} distance="30px">
          <div className="row tech_stack"> 
          <div className="col-12 col-sm-3">

            <h3 className="m-4 p-4 text-md-left text-center font-weight-bold">Tech Stack</h3>         
          </div>
            <div className="tech_stack_items col-12 col-sm-7 flex-wrap justify-content-center">
              <TechStackElement key={`${Math.random()}`} icon={HTML} title="HTML5"></TechStackElement>
              <TechStackElement key={`${Math.random()}`} icon={css} title="CSS3"></TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={javascript} title="JavaScript"></TechStackElement>
              <TechStackElement key={`${Math.random()}`} icon={react} title="React"></TechStackElement>
              <TechStackElement key={`${Math.random()}`} icon={redux} title="Redux"></TechStackElement>
              <TechStackElement key={`${Math.random()}`} icon={bootstrap} title="Bootstrap"></TechStackElement>
            </div>
          </div>
        </Fade>
    </div>
    </Container>
  );
}
