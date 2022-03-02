import React from "react";
import { Icon } from "@iconify/react";
export default function About({ t }) {
  return (
    <div className="about-contents">
      <div className="polaroid">
        <span className="polaroid-image-span" style={{ cursor: "auto" }}>
          <img
            height="250px"
            src={require("../images/profilepic.png")}
            alt="Avatar placeholder"
          />
          <Icon
            icon="vscode-icons:file-type-mongo"
            style={{ fontSize: "150%", margin: "9% 5% 0 5%" }}
          />
          <Icon
            icon="simple-icons:express"
            style={{ fontSize: "150%", margin: "9% 5% 0 5%" }}
          />
          <Icon
            icon="logos:react"
            style={{ fontSize: "150%", margin: "9% 5% 0 5%" }}
          />
          <Icon
            icon="logos:nodejs-icon"
            style={{ fontSize: "150%", margin: "9% 5% 0 5%" }}
          />
        </span>
      </div>
      <div className="about-me-info">
        <span style={{ width: "100%" }}>
          <div className="circle-icons-div">
            <Icon icon="emojione:red-circle" className="circle-icon" />
            <Icon icon="twemoji:yellow-circle" className="circle-icon" />
            <Icon icon="twemoji:green-circle" className="circle-icon" />
          </div>
          <div className="about-text-content">
            <br />
            {t("ABOUT ME HELLO")}
            <br />
            <span />
            {t("ABOUT ME TEXT")}
            <span />
          </div>
        </span>
      </div>
    </div>
  );
}
