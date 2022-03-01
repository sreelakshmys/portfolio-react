import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
export default function Projects() {
  return (
    <div className="carousel-div">
      <div className="project-contents">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <a
                    href="https://techy-news-corner.netlify.app/"
                    alt="Techy news Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../images/to-do-list.png")}
                      alt="projectImages"
                      height="230"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                      }}
                    />
                  </a>
                  <span className="project-date">2020</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <a
                    href="https://techy-news-corner.netlify.app/"
                    alt="To - Do List Website"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={require("../images/hangman.png")}
                      alt="projectImages"
                      height="230"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                      }}
                    />
                  </a>
                  <span className="project-date">2021</span>
                  <br />
                  <p className="project-title-settings">HANGMAN</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/to-do-list.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2021</span>
                  <br />
                  <p className="project-title-settings">TO-DO LIST</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2015</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2016</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2017</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2018</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2019</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="portfolio-item">
              <div className="foto">
                <div>
                  <img
                    src={require("../images/profilepic.png")}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">2020</span>
                  <br />
                  <p className="project-title-settings">TECHY NEWS</p>
                </div>
              </div>
            </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}
