import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { init } from 'ityped'
import { Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import copy from 'copy-to-clipboard';
import Fade from 'react-reveal/Fade';
import {HiDocument} from 'react-icons/hi'



export default function Home() {
  const [dropOpen,setDropOpen] = useState(false);
  useEffect(()=>{
    init(iTypedText.current, { showCursor: false, 
      strings: ['Front-end Developer', 'Tech Enthusiast','Avid Reader' ] })
  },[])
  const iTypedText = useRef();
  return (
    <Container>
    <div className="home-container" id="home">
        <div className="row mt-5 align-items-center expand-md">
        <Fade bottom="true" duration={500} delay={250} distance="30px">

          <div className="dev-img col-12 col-sm-6  mt-5 d-none d-md-block">
            <img src={require('../../assets/Home/developer.svg').default} className="img-fluid" alt="developer-Undraw-SVG"/>
          </div>
        </Fade>
        <Fade bottom="true" duration={500} delay={250} distance="30px">

          <div className="col-12  col-md-6 font-weight-bolder name">
            <span>
            Harshith Pendyala
            </span>
          <div className="iType row ml-2">
           -<span className="primary-text col-11 col-sm-auto " ref={iTypedText}></span>
          </div>
          <div className="row mt-5">
            <p className="col-12 col-sm-12 desc">
              I'm a Web Developer based in Hyderabad,Telangana. Coding is my passion and developing applicaitons for the web has become my drive.
            </p>
          </div>
          <div className="row resume justify-content-center">
            <a href="Harshith-Pendyala.pdf" target="_blank" rel="noreferrer" className="col-12 col-md-4" >
            <button className="btn btn-dark rounded" size="lg"><HiDocument/> Get Resume </button> 
            </a>
            <ButtonDropdown className="col-12 col-md-auto rounded" style={{height:'40px',marginTop:'22px'}} isOpen={dropOpen} toggle={()=>setDropOpen(!dropOpen)}>
              <DropdownToggle caret size="sm" >
                harshith.pendyala777@gmail.com
              </DropdownToggle>
              <DropdownMenu  className="DropDownMenu">
                <DropdownItem className="DropDownItem"><a href='mailto:harshithPendyala777@gmail.com'> Open in Email Client </a></DropdownItem>
                <DropdownItem  className="DropDownItem" onClick={()=> {copy('harshith.pendyala777@gmail.com'); }}> Copy Email address</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          </div>
          </Fade>
        </div>
    </div>
    </Container>
  );
}
