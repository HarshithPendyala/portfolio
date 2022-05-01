import React, { useRef, useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import {FaLinkedin} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import copy from "copy-to-clipboard";

export default function ContactMe() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_ei94xnd","template_y5d2uvj",formRef.current,"user_1BmH4oQwcvQcu8SBkfaHQ")
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);

        }
      );
  };
  return (
    <div className="c container" id="contact">
      <div className="c-wrapper row p-1">
        <div className="c-left col-12 col-sm-6">
          <Fade left="true" duration={500} delay={250} distance="30px">

          <div className="row">
            <h1 className="c-title">Get in touch</h1>
          </div>
          <div className="row">
            <p className="c-desc">
              You can shoot me an email, send me a message on LinkedIn, or, if
              you prefer, use the contact form.
            </p>
          </div>
          <div className="c-info row">
            <ButtonDropdown
              className="col-6 col-md-auto rounded"
              style={{ height: "40px", marginTop: "15px" }}
              isOpen={dropOpen}
              toggle={() => setDropOpen(!dropOpen)}
              direction="up"
            >
              <DropdownToggle caret size="sm">
                harshith.pendyala777@gmail.com
              </DropdownToggle>
              <DropdownMenu className="DropDownMenu">
                <DropdownItem className="DropDownItem">
                  <a href="mailto:harshithPendyala777@gmail.com">
                    {" "}
                    Open in Email Client{" "}
                  </a>
                </DropdownItem>
                <DropdownItem
                  className="DropDownItem"
                  onClick={() => {
                    copy("harshith.pendyala777@gmail.com");
                  }}
                >
                  {" "}
                  Copy Email address
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>{" "}
          </div>
          <div className="row">

            <a href="https://www.linkedin.com/in/harshith-pendyala/" target="_blank" rel="noreferrer" className="btn btn-dark mt-4 ml-3" >Message me on LinkedIn <FaLinkedin/> </a>
          </div>
        </Fade>
        </div>
        <div className="c-right col-12 col-sm-12 col-md-6 mt-4">
         <Fade right="true" duration={500} delay={250} distance="30px">

            <div className="row m-1">
          <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                className="col-12 col-sm"
                placeholder="Luke Skywalker"
                name="user_name"
              />
              <input
                type="text"
                className="col-12 col-sm"
                placeholder="Lightsaber owenership reg."
                name="subject"
              />
              <input
                type="email"
                className="col-12 col-sm"
                placeholder="luke@starwars.com"
                name="user_email"
              />
              <textarea
                rows={5}
                className="col-12 col-sm"
                placeholder="I'm thinking about giving my lightsaber..."
                name="message"
              />
              <input className="btn btn-info mt-2" type="submit" value="send"/>
          </form>
            <div className="m-1">
              {" "}
              {sent &&
              <div style={{ color: "green" }}> "Thank you for your interest, will get back to you soon" </div>}
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
