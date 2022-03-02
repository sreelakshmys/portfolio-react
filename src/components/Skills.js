import React, { useState } from "react";
import skillSet from "./skillSet";

export default function Skills({ t }) {
  const [skills] = useState(skillSet);
  return (
    <section id="skills">
      <div>
        <h1 className="section-title">
          <span>{t("SKILLS")}</span>
        </h1>
        <div className="skills-list">
          <div>
            <ul id="horizontal-list icon-tile">
              {skills.map((skill, i) => {
                return (
                  <li className="list-items" key={i}>
                    <span>
                      <div className="skills-tile">
                        {skill.icon}
                        <p className="skill-texts">{skill.title}</p>
                      </div>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
