import "./scss/App.scss";
import Header from "./components/Header";
import React, { useState } from "react";
import GithubCorner from "react-github-corner";
import Language from "./components/Language";
import Scroll from "./components/SmoothScroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

  // useState variables

  const [checked, setChecked] = useState(initialCheck());
  const [languageMode, setLanguageMode] = useState("en");

  // Function to change the theme
  function changeTheme() {
    setChecked((prev) => (prev ? false : true));
    var newTheme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

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
          <Header checked={checked} changeTheme={changeTheme} />
        </div>
        <div className="language-section">
          <Language
            languageMode={languageMode}
            setLanguageMode={setLanguageMode}
          />
        </div>
      </section>

      {/* page 2 */}
      <section className="about-section section">
        <div>
          <h1 className="about">
            <span>ABOUT ME</span>
          </h1>
          <div>
            <About />
          </div>
        </div>
      </section>

      {/* page 3 */}
      <section className="projects-section section">
        <div>
          <h1 className="section-title">
            <span>PROJECTS</span>
          </h1>
          <Projects />
        </div>
      </section>

      {/* page 3 */}
      <section className="skills-section section">
        <Skills />
      </section>
    </div>
  );
}

export default App;
