import React from "react";
import "../scss/App.scss";

export default function ProjectFlipCard({ projectData }) {
  return (
    <div className="flip-outer-div">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="project-image" src={projectData.img} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{projectData.title}</h1>
            <p>{projectData.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
