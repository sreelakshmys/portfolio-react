import React from "react";
import "../scss/App.scss";
import ProjectFlipCard from "./ProjectFlipCard";
import projectSet from "./ProjectSet";

export default function Projects({ t }) {
  return (
    <div className="project-card-div">
      {projectSet.map((projectData, index) => {
        return <ProjectFlipCard key={index} projectData={projectData} t={t} />;
      })}
    </div>
  );
}
