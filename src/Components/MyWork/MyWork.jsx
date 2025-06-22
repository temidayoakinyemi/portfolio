import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-card">
            <img
              src={work.w_img}
              alt={work.w_name}
              className="mywork-image"
              onClick={() => window.open(work.url, "_blank")}
            />
            <div className="mywork-info">
              <h2>{work.w_name}</h2>
              <p>{getDescription(work.w_name)}</p>
              <div className="detail-buttons">
                <a
                  href={work.url}
                  className="open-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

const getDescription = (name) => {
  switch (name) {
    case "Real Estate Landing Page":
      return "A clean and modern real estate landing page designed to showcase properties and attract potential buyers. Fully responsive and built with a user-friendly layout for easy navigation.";
    case "Edusity":
      return "An engaging online education platform UI, offering a structured layout for courses, categories, and learning paths. Built for responsiveness and clarity.";
    case "Shortly":
      return "A sleek link-shortening website. Users can paste any long URL and get a shortened version instantly. Includes responsive design and interactive UI elements.";
    default:
      return "";
  }
};

export default MyWork;
