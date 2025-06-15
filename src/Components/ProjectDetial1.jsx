import React from "react";
import "./ProjectDetail1.css";

const ProjectDetial1 = () => {
  return (
    <div className="project-detail">
      <h1>Shoprrr</h1>
      <p>An E-commerce Application For Buying Cotton Products.</p>
      <img src="/path-to-your-detail-image.png" alt="checkout page" />

      <h2>About</h2>
      <p>
        Shoprrr is an e-commerce platform catered towards giving the best and
        fast experience...
      </p>

      <h2>Technologies</h2>
      <ul>
        <li>React</li>
        <li>Redux Saga</li>
        <li>JavaScript</li>
        <li>Firebase</li>
      </ul>

      <p>
        <a href="https://shoprrr.netlify.com" target="_blank">
          Website
        </a>
      </p>
      <p>
        <a href="https://github.com/adenekan41/shoprrr" target="_blank">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default ProjectDetial1;
