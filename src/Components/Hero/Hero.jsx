import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import portfolio2 from "../../assets/portfolio2.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={portfolio2} alt="" className="portfolioprofile" />
      <h1>
        <span>I'm Akinyemi Temidayo,</span> frontend developer based in Nigeria
      </h1>
      <p>
        I am a frontend developer from, Nigeria with 2 years of experience i got
        my diploma from AltSchool Africa.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
