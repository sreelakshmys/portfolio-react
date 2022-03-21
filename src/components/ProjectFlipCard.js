import React from "react";
import "../scss/App.scss";

export default function ProjectFlipCard({ projectData, t }) {
  return (
    <div className="flip-outer-div">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="project-image" src={projectData.img} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <div>
              <h1 className="project-title">{t(projectData.title)}</h1>
              <p>{t(projectData.about)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
