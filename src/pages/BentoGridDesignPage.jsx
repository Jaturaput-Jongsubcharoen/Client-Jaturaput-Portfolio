import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../containers/NavigationBar';
import '../styles/BentoGridDesignCSS.css';

function BentoGridDesignPage() {

  return (
    <>
      {
        /* Portfolio by Jaturaput Jongsubcharoen | AI - Software engineering */
      }

        <title>Home Page</title>
        <link rel="stylesheet" type="text/css" href="portfolio-CSS.css" />
        <link rel="icon" type="logo/x-icon" href="logo/Movie-Addict-Logo2.png" />


      <script src="portfolio-script.js"></script>
      {
        /* ______________________________________________________________________________________________________________________________________________________ */
      }
      {
        /* >Live Server:Open with Live Server */
      }
      {
        /* ______________________________________________________________________________________________________________________________________________________ */
      }
      <div className="body-bento-grid-design">
        <div className="container">
          {
            /* ______________________________________________________________________________________________________________________________________________________ */
          }
          <div className="scrolling-slides">
            <div className="Grid-container">
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <p
                className="grid-nav0-1-menu"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  padding: "6px",
                  boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, .5)",
                }}
              >
                Project
              </p>
              <div className="nav-bar-box">
                <div className="grid-nav-container">
                  <a href="" className="grid-nav0-2-menu">
                    <p>ARCHITECTURAL</p>
                    <br/>
                    <p>DESIGN</p>
                  </a>
                  <a href="" className="grid-nav1-menu">
                    <p>MAGAZINE</p>
                    <br/>
                    <p>DESIGN</p>
                  </a>
                  {/*
                  <p href="#" className="grid-nav1-menu">
                    
                    <br />
                    <a
                      href="subpage/project/architectural_design/architectural_design_page.html"
                      className="grid-nav1-sub1-menu"
                    >
                      ARCHITECTURAL DESIGN
                    </a>
                    <a
                      href="subpage/project/magazine_design/magazine_design_page.html"
                      className="grid-nav1-sub1-menu"
                    >
                      MAGAZINE DESIGN
                    </a>
                    <a
                      href="subpage/project/web_design/web_design_page.html"
                      className="grid-nav1-sub1-menu"
                    >
                      WEB DESIGN
                    </a>
                    <a
                      href="subpage/project/magazine_design/magazine_design_page.html"
                      className="grid-nav1-sub1-menu"
                    >
                      WORK
                    </a>
                  </p>
                  */}
                  <a
                    href="subpage/about_me/about_me_page.html "
                    className="grid-nav2-menu"
                  >
                    <p>WEB</p>
                    <br/>
                    <p>DESIGN</p>
                  </a>
                </div>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-1-1"></div>
              <div className="Grid-1-2"></div>
              <div className="Grid-1-3"></div>
              <div className="Grid-1-4"></div>
              <div className="Grid-1-5"></div>
              <div className="Grid-1-6"></div>
              <div className="Grid-1-7"></div>
              <div className="Grid-1-8"></div>
              <div className="Grid-1-9"></div>
              <div className="Grid-1-10"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-2-1"></div>
              <div className="Grid-2-2"></div>
              <div className="Grid-2-3"></div>
              <div className="Grid-2-4"></div>
              <div className="Grid-2-5"></div>
              <div className="Grid-2-6"></div>
              <div className="Grid-2-7"></div>
              <div className="Grid-2-8"></div>
              <div className="Grid-2-9"></div>
              <div className="Grid-2-10"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-3-1"></div>
              <div className="Grid-3-2"></div>
              <div className="Grid-3-3"></div>
              <div className="Grid-3-4"></div>
              <div className="Grid-3-5"></div>
              <div className="Grid-3-6"></div>
              <div className="Grid-3-7"></div>
              <div className="Grid-3-8"></div>
              <div className="Grid-3-9"></div>
              <div className="Grid-3-10"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-4-1"></div>
              <div className="Grid-4-2"></div>
              <div className="Grid-4-3"></div>
              <div className="Grid-4-4"></div>
              <div className="Grid-4-5"></div>
              <div className="Grid-4-6"></div>
              <div className="Grid-4-7"></div>
              <div className="Grid-4-8"></div>
              <div className="Grid-4-9"></div>
              <div className="Grid-4-10"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-5-1"></div>
              <div className="Grid-5-2"></div>
              <div className="Grid-5-3"></div>
              <div className="Grid-5-4"></div>
              <div className="Grid-5-5"></div>
              <div className="Grid-5-6"></div>
              <div className="Grid-5-7"></div>
              <div className="Grid-5-8"></div>
              <div className="Grid-5-9"></div>
              <div className="Grid-5-10"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }

              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="title1-box r1-c2-location">
                <span style={{ "--i": 0 }}>
                  <h2>P</h2>
                </span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
              <div className="title1-box r2-c3-location">
                <span style={{ "--i": 0 }}>
                  <h2>O</h2>
                </span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
              <div className="title1-box r3-c4-location">
                <span style={{ "--i": 0 }}>
                  <h2>R</h2>
                </span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
              <div className="title1-box r4-c5-location">
                <span style={{ "--i": 0 }}>
                  <h2>T</h2>
                </span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="title2-box r1-c3-location">
                <h2>F</h2>
              </div>
              <div className="title2-box r2-c3-location">
                <h2>O</h2>
              </div>
              <div className="title2-box r3-c3-location">
                <h2>L</h2>
              </div>
              <div className="font4-title2-box r4-c3-location">
                <h2>i</h2>
                <h2>i</h2>
              </div>
              <div className="title2-box r5-c3-location">
                <h2>O</h2>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="font1-painting-box r4-c1-location">
                <h2>P</h2>
                <h2>P</h2>
              </div>
              <div className="font2-painting-box r4-c2-location">
                <h2>A</h2>
                <h2>A</h2>
              </div>
              {
                /*
                <div className="font3-painting-box">
                    <h2>I</h2>
                </div>
                */
              }
              <div className="font4-painting-box r4-c4-location">
                <h2>N</h2>
                <h2>N</h2>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="project-box">
                <h2>PROJECT</h2>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
            </div>
          </div>
          {
            /* ______________________________________________________________________________________________________________________________________________________ */
          }
        </div>
      </div>
    </>
  );
}

export default BentoGridDesignPage;