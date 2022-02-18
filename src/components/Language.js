import React from "react";
import { Icon } from "@iconify/react";
export default function Language({ languageMode, setLanguageMode }) {
  return (
    <div className="language">
      <div style={{ display: "inline" }}>
        <Icon
          icon="emojione-v1:flag-for-united-kingdom"
          className=" language-icon"
          filter={
            languageMode === "en" ? "brightness(40%)" : "brightness(100%)"
          }
          onClick={() => setLanguageMode("en")}
        />
      </div>
      <div style={{ display: "inline" }}>
        <Icon
          icon="emojione-v1:flag-for-germany"
          className="language-icon"
          filter={
            languageMode === "en" ? "brightness(100%)" : "brightness(40%)"
          }
          onClick={() => setLanguageMode("de")}
        />
      </div>
    </div>
  );
}
