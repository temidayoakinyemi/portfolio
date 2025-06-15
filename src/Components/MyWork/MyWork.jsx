import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const getDescription = (name) => {
    switch (name) {
      case "Real Estate Landing Page":
        return "A clean and modern real estate landing page designed to showcase properties and attract potential buyers. Fully responsive and built with a user-friendly layout for easy navigation.";
      case "Edusity":
        return "An engaging online education platform UI, offering a structured layout for courses, categories, and learning paths. Built for responsiveness and clarity.";
      case "Shortly":
        return "A sleek link-shortening website. Shortly is a full-featured link shortening website. Users can paste any long URL and get a shortened version instantly. Includes responsive design and interactive UI elements.";
      default:
        return "";
    }
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div
        className={`mywork-content ${
          selectedWork ? "with-detail" : "no-detail"
        }`}
      >
        <div className="mywork-container">
          {mywork_data.map((work, index) => (
            <img
              key={index}
              src={work.w_img}
              alt={work.w_name}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </div>

        {selectedWork && (
          <div className="mywork-detail">
            <h2>{selectedWork.w_name}</h2>
            <img src={selectedWork.w_img} alt={selectedWork.w_name} />
            <p>
              <strong>About:</strong> {getDescription(selectedWork.w_name)}
            </p>
            <p>
              <strong>Technologies:</strong> ReactJS, CSS
            </p>
            <div className="detail-buttons">
              <a
                href={selectedWork.url}
                className="open-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Project
              </a>
              <button
                className="back-btn"
                onClick={() => setSelectedWork(null)}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
