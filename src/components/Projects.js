import React from "react";
import "../scss/App.scss";
import ProjectFlipCard from "./ProjectFlipCard";
import projectSet from "./ProjectSet";

export default function Projects() {
  return (
    <div className="project-card-div">
      {projectSet.map((projectData, index) => {
        return <ProjectFlipCard key={index} projectData={projectData} />;
      })}
    </div>
  );
}
