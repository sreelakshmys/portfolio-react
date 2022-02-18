import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import GithubCorner from "react-github-corner";
import Language from "./components/Language";
import Scroll from "./components/SmoothScroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [checked, setChecked] = useState(false);
  const [languageMode, setLanguageMode] = useState("en");

  function changeTheme() {
    setChecked((prev) => (prev ? false : true));
  }

  return (
    <div className="App">
      <Scroll />
      {/* page - 1 */}

      <section className="section">
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
          <div>
            <Projects />
          </div>
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
