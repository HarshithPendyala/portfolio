import React, { useEffect, useRef } from "react";
import "./Home.css";
import { init } from 'ityped'
import { Container } from "reactstrap";

export default function Home() {
  useEffect(()=>{
    init(iTypedText.current, { showCursor: true, 
      strings: ['Front-end Developer', 'Tech Enthusiast','Avid Reader' ] })
  },[])
  const iTypedText = useRef();
  return (
    <Container>

    <div className="home-container" id="home">
        <div className="row align-items-center">
          <span className="col-12 col-sm-12 font-weight-bolder name">
            Hi, I'm Harshith
          </span>
        </div>
          <div className="iType row ">
           <span className="primary-text col-12 col-sm-auto " ref={iTypedText}></span>
          </div>
        <div className="row mt-3 profile-details-role justify-content-center">
          <div className="dev-img col-12 col-sm-auto">
            <img src={require('../../assets/Home/developer.svg').default} className="img-fluid" alt="developer-Undraw-SVG"/>
          </div>        
        </div>
        {/* <div className="profile-options">
          <a href="Harshith.Pendyala.pdf" download="Harshith.Pendyala.pdf">
          <button className="btn highlighted-btn"> Get Resume </button>
          </a>
        </div> */}
    </div>
    </Container>
  );
}
