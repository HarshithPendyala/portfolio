import React,{  useState } from "react";
import "./AboutMe.css";
import {FaHtml5,FaCss3,FaJsSquare,FaReact,FaNodeJs,FaBootstrap,FaGitAlt,FaGithub} from 'react-icons/fa';
import {SiMongodb,SiPostman,SiMysql} from 'react-icons/si';
import ImageMapper from 'react-img-mapper';
import URI from '../../assets/Home/burger.svg';
import areasJson from './imageMap.json'
// import {  useState } from "react/cjs/react.production.min";

export default function AboutMe() {
  const [skill,setSkill] = useState("");
  const URL = URI;
  const MAP = {
    name: "skills-map",
    areas: areasJson
  }
  const updateSkill = (skill) =>{
    setSkill(skill);
  }
  
  const SkillRender = () => {
    if(skill === "Front-end"){
      return(
        <div style={{position:'relative'}} > 
        <h2>Front-End</h2>
          <span className="fa-3x iconsk "><FaHtml5/></span>
          <span className="fa-3x iconsk "><FaCss3/></span>
          <span className="fa-3x iconsk "><FaJsSquare/></span>
          <span className="fa-3x iconsk "><FaReact/></span>
          <span className="fa-3x iconsk "><FaBootstrap/></span>          
        </div>        
      );
    }
    else if(skill === "tools"){
      return (
        <div style={{position:'relative'}} > 
          <h2>Tools/Middleware</h2>
          <span className="express">Express.js</span>
          <span className="fa-3x iconsk "><FaGitAlt/></span>
          <span className="fa-3x iconsk "><FaGithub/></span>
          <span className="fa-3x iconsk "><SiPostman/></span>
        </div>
      );
    }
    else if(skill === "Backend"){
      return(
        <div style={{position:'relative'}} > 
          <h2>Back-End</h2>
          <span className="fa-3x iconsk "><FaNodeJs/></span>
          <span className="fa-3x iconsk "><SiMongodb/></span>
          <span className="fa-3x iconsk "><SiMysql/></span>

        </div>
      );
    }
    else {
      return (<div style={{color:'#B0B3B8'}}>Click on parts of Hamburger to know more</div>);
    }
  }
  return (
     <div className="a container" id="aboutme">
      <div className="row justify-content-center">
        <h1 className="a-head col-7 col-sm-6 col-md-auto font-weight-bold">About Me</h1>
      </div>
      <div className="row justify-content-center">
        <p className="a-desc col-12 col-sm-12 col-md-auto">I am a web developer with a passion for creating beautiful, responsive websites and web applications. <br/>
      In my free time I like to read books, watch anime and play badminton.</p>
      </div>
      <div className="skills row justify-content-center">
        <h1 className="skills-head col-4 col-sm-3 col-md-auto font-weight-bold">Skills</h1>
          
      </div>
      <div className="row justify-content-center">
      <div className="col-12 col-sm-6">

      <ImageMapper 
        src={URL} 
        map={MAP} 
        responsive parentWidth={375} 
        onClick={(area,index,event)=>{
          updateSkill(area.title);
        }}/>
      </div>
        <div className="col-12 col-sm-6">

          <SkillRender/>
        </div>
          
      </div>
    </div>
  );
}
