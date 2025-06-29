import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import portfolio2 from "../../assets/portfolio2.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={portfolio2} className="portfoliopic" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a couple of years
              of professional expertise in the field. Throughout my carrer. I
              hope had the previledge of collaborating with prestigious
              organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiam and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>31+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>JOB RECIEVED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
