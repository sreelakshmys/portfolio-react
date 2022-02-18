import React from "react";
import { Icon } from "@iconify/react";
export default function About() {
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
            Hello :)
            <br />
            <span />
            👋 I'm Sreelakshmy S. I am an experienced developer working in this
            field since 2017. I enjoy creating things that live on the internet!
            My interest in web development started back in 2021 when I decided
            to try building a website of my own — turns out this taught me a lot
            about HTML and CSS!
            <span />
          </div>
        </span>
      </div>
    </div>
  );
}
