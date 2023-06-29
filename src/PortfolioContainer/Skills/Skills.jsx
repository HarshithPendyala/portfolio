import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import "./skills.css";
import HTML from "../../images/html5.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import javascript from "../../images/javascript.png";
import css from "../../images/css.png";
import git from "../../images/git.png";
import node from "../../images/node.png";
import express from "../../images/express.png";
import restfulapi from "../../images/restfulapi.png";
import bootstrap from "../../images/bootstrap.png";
import netlify from "../../images/netlify.jpg";
import postman from "../../images/postman.png";
import mongodb from "../../images/mongodb.png";
import sql from "../../images/sql.jpg";
import jenkins from "../../images/jenkins.jpg";

import burger_blank from "../../images/burger_blank.png";
import TechStackElement from "../Home/TechStackElement";

export default function Skills() {
  const [skill, setSkill] = useState("");
  const updateSkill = (skill) => {
    setSkill(skill);
  };

  const SkillRender = () => {
    if (skill === "Front-end") {
      return (
        <>
          <Fade right="true" duration={500} delay={250} distance="30px">

          <h2>Front End</h2>
          <div className="d-flex flex-wrap justify-content-center ">
            <TechStackElement key={`${Math.random()}`} icon={javascript}>JavaScript</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={react}>React</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={redux}>Redux</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={bootstrap}>Bootstrap</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={HTML}>HTML5</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={css}>CSS3</TechStackElement>
          </div>
          </Fade>
        </>
      );
    } else if (skill === "tools") {
      return (
        <div style={{ position: "relative" }}>
          <Fade right="true" duration={500} delay={250} distance="30px">

          <h2>Tools</h2>
          <div className="d-flex flex-wrap justify-content-center ">
            <TechStackElement key={`${Math.random()}`} icon={git}>Git</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={postman}>Postman</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={jenkins}>Jenkins</TechStackElement>
          </div>
          </Fade>
        </div>
      );
    } else if (skill === "Backend") {
      return (
        <div style={{ position: "relative", justifyContent: "center" }}>
        <Fade right="true" duration={500} delay={250} distance="30px">

          <h2>Back-End</h2>
          <div className="d-flex flex-wrap justify-content-center ">
            <TechStackElement key={`${Math.random()}`} icon={node}>Node</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={express}>Express</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={restfulapi}>RESTful API</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={netlify}>Netlify</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={mongodb}>MongoDB</TechStackElement>
            <TechStackElement key={`${Math.random()}`} icon={sql}>SQL</TechStackElement>
        </div>
        </Fade>
        </div>
      );
    } else {
      return (
        <div style={{ color: "#B0B3B8" }}>
        <Fade left="true" duration={500} delay={250} distance="30px">

          <h3>Apps are like Burgers. They've got layers</h3>
          Select a layer on Burger to show stack skills
          </Fade>
        </div>
      );
    }
  };
  return (
    <div className="a container" id="skills">
      <div className="skills row  justify-content-center">
        <h1 className="skills-head col-4 col-sm-3 col-md-auto font-weight-bold">
          Skills
        </h1>
      </div>
      <div className="row align-items-center mt-5" >
        <div className="col-12 col-sm-auto col-md-6">
        <Fade bottom duration={750} delay={500} distance="30px">

          <div className="skills-wapper">
            <div className="burger-wrapper">
              <div className="burger-overlay">
                <div
                  onClick={() => updateSkill("Front-end")}
                  onMouseEnter={() => updateSkill("Front-end")}
                  className="top-overlay"
                ></div>
                <div
                  onClick={() => updateSkill("tools")}
                  onMouseEnter={() => updateSkill("tools")}
                  className="mid-overlay"
                ></div>
                <div
                  onClick={() => updateSkill("Backend")}
                  onMouseEnter={() => updateSkill("Backend")}
                  className="bot-overlay"
                ></div>
              </div>
              <img
                height="316"
                width="350"
                src={burger_blank}
                alt="Burger-Blank"
              />
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-12 col-sm-auto col-md-6 text-center">

          <SkillRender />
        </div>
      </div>
    </div>
  );
}
