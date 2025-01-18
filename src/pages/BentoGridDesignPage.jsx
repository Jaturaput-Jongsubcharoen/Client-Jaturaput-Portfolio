import { useState, useEffect } from 'react';

import "../styles/BentoGridDesignCSS.css";
import '../index.css';

import myPicture1 from "../images/my_picture1(500x750).png";
import myPicture2 from "../images/my_picture2(800x800).png";

import MovieAddict from "../images/screenshots/Movie-Addict(1900x1080).png";
import Tesla from "../images/screenshots/Tesla(1900x1080).png";
import NutriKcal from "../images/screenshots/Nutri-Kcal(1900x1080).png";
import QueueMeMobileApp from "../images/screenshots/QueueMe-Mobile-App3(475x986).png";
import MagazineDesign2 from "../images/screenshots/Magazine-Design2(7200x2480)-300PxInch.png";
import AWIIHouseWorkExperience from "../images/screenshots/AWIIHouse-Work-Experience(3508x2480)-300PxInch.png";


function BentoGridDesignPage() {

  const projects = [
    {
      image: MovieAddict,
      link: "http://studentweb.cencol.ca/jjongsub/Individual_Project/Individual_Project.html",
      title: "Movie-Addict (Website) Project ",
      type: "web & mobile design",
    },
    {
      image: Tesla,
      link: "http://studentweb.cencol.ca/jjongsub/Assignment3/assignment3.html",
      title: "Tesla Specification (Website) Project",
      type: "web & mobile design",
    },
    {
      image: NutriKcal,
      link: "https://comp229-nutrisnap-client1.onrender.com/",
      title: "Nutritional Tracking (Website) Project",
      type: "web & mobile design",
    },
    {
      image: QueueMeMobileApp,
      link: "https://bit.ly/ClinicMobileApp-Figma",
      title: "Clinic Appointment (Mobile App) Design",
      type: "web & mobile design",
    },
    {
      image: MagazineDesign2,
      link: "https://online.fliphtml5.com/iikvd/lmou/?1639471606477#p=2",
      title: "Magazine Design",
      type: "magazine design",
    },
    {
      image: AWIIHouseWorkExperience,
      link: "https://online.fliphtml5.com/ukqkz/yexy/#p=2",
      title: "Wittawii Company Work Experience",
      type: "architectural design",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.type === "web & mobile design")
  );
  const [selectedProject, setSelectedProject] = useState(filteredProjects[0]);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      if (selectedCategory === "web") {
        return project.type === "web & mobile design";
      } else if (selectedCategory === "magazine") {
        return project.type === "magazine design";
      } else if (selectedCategory === "architectural") {
        return project.type === "architectural design";
      }
      return false;
    });

    setFilteredProjects(filtered);
    setSelectedProject(filtered[0]);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePrev = () => {
    const currentIndex = filteredProjects.indexOf(selectedProject);
    const newIndex =
      currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredProjects.indexOf(selectedProject);
    const newIndex =
      currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    setSelectedProject(filteredProjects[newIndex]);
  };



  return (
    <>
      {
        /* Portfolio by Jaturaput Jongsubcharoen | AI - Software engineering */
      }
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
                PROJECT
              </p>
              <div className="nav-bar-box">
                <div className="grid-nav-container">
                  {/* ARCHITECTURAL DESIGN */}
                  <div
                    className="grid-nav0-2-menu"
                    onClick={() => handleCategoryChange("architectural")}
                  >
                    <p>ARCHITECTURAL</p>
                    <br />
                    <p>DESIGN</p>
                  </div>

                  {/* MAGAZINE DESIGN */}
                  <div
                    className="grid-nav1-menu"
                    onClick={() => handleCategoryChange("magazine")}
                  >
                    <p>MAGAZINE</p>
                    <br />
                    <p>DESIGN</p>
                  </div>

                  {/* WEB DESIGN */}
                  <div
                    className="grid-nav2-menu"
                    onClick={() => handleCategoryChange("web")}
                  >
                    <p>WEB & MOBILE</p>
                    <br />
                    <p>APP DESIGN</p>
                  </div>
                </div>
              </div>

              <p
                className="grid-nav0-1-Contact"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  padding: "6px",
                  boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, .5)",
                }}
              >
                CONTACT
              </p>
              <div className="nav-bar-box-Contact r1-c9-location">
                <div className="project-content-box"> {/*className="project-content-box"*/}
                  <div className="grid-content-container" style={{ textAlign: "center" }}> {/*className="grid-content-container"*/}
                    {/*/
                    <div className="grid-content1">
                      <h2>MOVIE-ADDICT</h2>
                    </div>
                    <div className="grid-content2">
                      <img
                        className="content-logo-project"
                        src="web_design_project/Individual_Project/logo/Movie-Addict-Logo.png"
                        alt="Movie Addict Logo"
                      />
                    </div>
                    
                    <div className="grid-content3">
                      <a
                        href="mailto:jjongsub@my.centennialcollege.ca"
                        className="button-product"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CONTACT
                      </a>
                    </div>
                    <br />
                    <br />
                    */}
                    <div className="grid-content1">
                    <h3>Github:</h3>
                      <a
                        href="https://github.com/Jaturaput-Jongsubcharoen/Client-Jaturaput-Portfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidingHyperLink"
                      >
                        https://github.com/Jaturaput-Jongsubcharoen/Client-Jaturaput-Portfolio.git
                      </a>
                    <br />
                    <br />
                    <h3>LinkedIn:</h3>
                      <a
                        href="https://www.linkedin.com/in/jaturaput-jongsubcharoen-5267ba25b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidingHyperLink"
                      >
                        https://www.linkedin.com/in/jaturaput-jongsubcharoen-5267ba25b
                      </a>
                    <br />
                    <br />
                    <h3>College Email:</h3>
                      <a
                        href="mailto:jjongsub@my.centennialcollege.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidingHyperLink"
                      >
                        https://www.linkedin.com/in/jaturaput-jongsubcharoen-5267ba25b
                      </a>
                    <br />
                    <br />
                    <h3>Private Email:</h3>
                      <a
                        href="mailto:macker.jong@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidingHyperLink"
                      >
                        macker.jong@gmail.com
                      </a>
                    
                    </div>
                  </div>
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
                <button
                  onClick={handlePrev} className="left-arrow-Sliding">
                  &#8592; {/* Left arrow */}
                </button>

                <div className="sub-grid-projects">

                {/*a:hover*/}
                <div className="sub-grid-item">
                <div className="rounded-border-gradient">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  </a>
                </div>
                </div>

                <div className="sub-grid-item">
                <h3>{selectedProject.title}</h3>
                </div>

                </div>
                <button onClick={handleNext} className="right-arrow-Sliding">
                  &#8594; {/* Right arrow */}
                </button>
              </div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="project-img-box">
                  <img src={myPicture2}  />
              </div>
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