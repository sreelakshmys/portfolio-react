import React from "react";
import { Icon } from "@iconify/react";
export default function Language({ selectedLang, changeLanguage }) {
  return (
    <div className="language">
      <div style={{ display: "inline" }}>
        <Icon
          icon="emojione-v1:flag-for-united-kingdom"
          className=" language-icon"
          filter={
            selectedLang === "en" ? "brightness(40%)" : "brightness(100%)"
          }
          onClick={() => changeLanguage("en")}
        />
      </div>
      <div style={{ display: "inline" }}>
        <Icon
          icon="emojione-v1:flag-for-germany"
          className="language-icon"
          filter={
            selectedLang === "en" ? "brightness(100%)" : "brightness(40%)"
          }
          onClick={() => changeLanguage("de")}
        />
      </div>
    </div>
  );
}
