import "./scss/App.scss";
import Header from "./components/Header";
import React, { useState } from "react";
import GithubCorner from "react-github-corner";
import Language from "./components/Language";
import Scroll from "./components/SmoothScroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useTranslation } from "react-i18next";

function App() {
  // To check the browser color
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // to assign to the useState, checking for the intial value
  function initialCheck() {
    if (
      prefersDark ||
      localStorage.getItem("theme") === "light" ||
      localStorage.getItem("theme") === null
    ) {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      return false;
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      return true;
    }
  }

  const { t } = useTranslation();
  const [checked, setChecked] = useState(initialCheck());
  // Function to change the theme
  function changeTheme() {
    setChecked((prev) => (prev ? false : true));
    var newTheme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // useState variables
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(setInitialLanguageValue);

  function setInitialLanguageValue() {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      return localStorage.getItem("lang");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", "en");
      return "en";
    }
  }

  const changeLanguage = (langValue) => {
    setSelectedLang(langValue);
    i18n.changeLanguage(langValue);
    localStorage.setItem("lang", langValue);
  };

  return (
    <div className="App">
      <Scroll />
      {/* page - 1 */}
      <section className="home-section section">
        <GithubCorner
          href="https://github.com/sreelakshmys"
          direction="left"
          size={90}
        />
        <div className="main-content">
          <Header checked={checked} changeTheme={changeTheme} t={t} />
        </div>
        <div className="language-section">
          <Language
            selectedLang={selectedLang}
            changeLanguage={changeLanguage}
          />
        </div>
      </section>
      {/* page 2 */}
      <section className="about-section section">
        <div>
          <h1 className="about">
            <span>{t("ABOUT ME")}</span>
          </h1>
          <div>
            <About t={t} />
          </div>
        </div>
      </section>
      {/* page 3 */}
      <section className="projects-section section">
        <div>
          <h1 className="section-title">
            <span>{t("PROJECTS")}</span>
          </h1>
          <Projects />
        </div>
      </section>
      {/* page 3 */}
      <section className="skills-section section">
        <Skills t={t} />
      </section>
    </div>
  );
}

export default App;
