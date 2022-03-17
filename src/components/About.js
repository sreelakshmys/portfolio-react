import React from "react";
import { Icon } from "@iconify/react";
export default function About({ t }) {
  return (
    <div className="about-contents">
      <div className="polaroid">
        <span className="polaroid-image-span" style={{ cursor: "auto" }}>
          <div>
            <img
              className="avatar"
              src={require("../images/profilepic.png")}
              alt="Avatar placeholder"
            />
          </div>
          <div>
            <Icon
              className="mern-stack-icons"
              icon="vscode-icons:file-type-mongo"
            />
            <Icon className="mern-stack-icons" icon="simple-icons:express" />
            <Icon className="mern-stack-icons" icon="logos:react" />
            <Icon className="mern-stack-icons" icon="logos:nodejs-icon" />
          </div>
        </span>
      </div>
      <div className="about-me-info">
        <span>
          <div className="circle-icons-div">
            <Icon icon="emojione:red-circle" className="circle-icon" />
            <Icon icon="twemoji:yellow-circle" className="circle-icon" />
            <Icon icon="twemoji:green-circle" className="circle-icon" />
          </div>
          <div className="about-text-content">
            <div>{t("ABOUT ME HELLO")}</div>
            <div />
            {t("ABOUT ME TEXT")}
            <div />
          </div>
        </span>
      </div>
    </div>
  );
}
