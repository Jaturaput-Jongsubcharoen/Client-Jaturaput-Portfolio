import { useState, useEffect } from 'react';
import { formatDateWithOrdinal } from "../containers/FormatDate";

import "../styles/BentoGridDesignCSS.css";
import '../index.css';

import myPicture1 from "../images/my_picture1(500x750).png";
import myPicture2 from "../images/my_picture2(800x800).png";
import g1jo from "../gif/G1JO.gif";

import MovieAddict from "../images/screenshots/Movie-Addict(1900x1080).png";
import Tesla from "../images/screenshots/Tesla(1900x1080).png";
import NutriKcal from "../images/screenshots/Nutri-Kcal(1900x1080).png";
import QueueMeMobileApp from "../images/screenshots/QueueMe-Mobile-App3(475x986).png";

import MagazineDesign2 from "../images/screenshots/Magazine-Design2(7200x2480)-300PxInch.png";

import AWIIHouseWorkExperience from "../images/screenshots/AWIIHouse-Work-Experience(3508x2480)-300PxInch.png";
import UndergraduateArchitectureProject from "../images/screenshots/Undergraduate-Architecture-Project(2480x3508)-300PxInch.png";

function BentoGridDesignPage() {

  const projects = [
    {
      image: MovieAddict,
      link: "http://studentweb.cencol.ca/jjongsub/Individual_Project/Individual_Project.html",
      title: "Movie-Addict (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-03-25",
        end: "2024-04-08",
      },
      detail: "Designed streaming service website that announces movies, allowing users to rent/purchase them",
    },
    {
      image: Tesla,
      link: "http://studentweb.cencol.ca/jjongsub/Assignment3/assignment3.html",
      title: "Tesla Specification (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-01-29",
        end: "2024-02-05",
      },
      detail: "Created a visually appealing and responsive website to showcase Tesla's specifications and features. Focused on delivering a clean, modern layout, ensuring compatibility across devices. Incorporated interactive elements such as hover effects, animations, and structured navigation for enhanced user experience. Ensured proper SEO techniques for better discoverability of the webpage.",
    },
    {
      image: NutriKcal,
      link: "https://comp229-nutrisnap-client1.onrender.com/",
      title: "Nutritional Tracking (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, JavaScript, React, Node, Express, GitHub, MongoDB Compass, Render, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-11-14",
        end: "2024-12-12",
      },
      detail: "Handled all website functions on the website to connect between the MongoDB, backend server and frontend server and managed the deployment successfully with user-friendly design. All features were tied to user authentication; users without a user ID had to create one and log in first, with tokens used for verification.",
    },
    {
      image: QueueMeMobileApp,
      link: "https://bit.ly/ClinicMobileApp-Figma",
      title: "Clinic Appointment (Mobile App) Design",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Figma, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-11-21",
        end: "2024-12-05",
      },
      detail: "Designed the test design for Clinic Mobile App, mainly focused on appointment and arrangement flexibly, incorporating features such as AI Chatbot, Prescription, AI chatbot, prescription handling, medical news, and department navigation.",
    },
    {
      image: MagazineDesign2,
      link: "https://online.fliphtml5.com/iikvd/lmou/?1639471606477#p=2",
      title: "Magazine Design",
      type: "MAGAZINE DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2022-10-07",
        end: "2022-10-14",
      },
      detail: "Created an interactive and visually appealing magazine layout to present articles, advertisements, and images effectively. Focused on utilizing creative typography and graphics for an engaging reading experience. Integrated features for smooth navigation, such as hyperlinks and clickable elements, to enhance accessibility in digital formats.",
    },
    {
      image: AWIIHouseWorkExperience,
      link: "https://online.fliphtml5.com/ukqkz/yexy/#p=2",
      title: "Wittawii Company Work Experience",
      type: "ARCHITECTURAL DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2022-01-01",
        end: "2022-11-11",
      },
      detail: "Worked as an architectural designer for residential and commercial projects. Designed detailed 3D models and rendered realistic visualizations to present to clients. Collaborated closely with team members to refine designs based on feedback. Produced floor plans and construction documents using 2D AutoCAD while ensuring adherence to project timelines and quality standards.",
    },
    {
      image: UndergraduateArchitectureProject,
      link: "https://online.fliphtml5.com/ukqkz/ybin/#p=1",
      title: "Undergraduate Architecture Project",
      type: "ARCHITECTURAL DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, V-Ray, Photoshop, Illustrator",
      work_types: "Individual Project",
      project_duration: {
        start: "2016-08-08",
        end: "2021-05-27",
      },
      detail: "Developed an innovative architectural design project as part of undergraduate coursework. Conducted extensive research to understand user needs and environmental impact, integrating sustainability into the project. Created 3D models and rendered photorealistic images using V-Ray for presentations. Produced detailed site plans, elevations, and conceptual drawings to communicate the design intent effectively.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category
  const [filteredProjects, setFilteredProjects] = useState(projects.filter((project) => project.type === "WEB & MOBILE DESIGN"));
  const [selectedProject, setSelectedProject] = useState(filteredProjects[0]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      if (selectedCategory === "web") {
        return project.type === "WEB & MOBILE DESIGN";
      } else if (selectedCategory === "magazine") {
        return project.type === "MAGAZINE DESIGN";
      } else if (selectedCategory === "architectural") {
        return project.type === "ARCHITECTURAL DESIGN";
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

  /*
  const formatDetail = (text) => {
    return text.replace(/&nbsp;/g, " ").trim();
  };
  */

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference;
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
  };

  const duration = calculateDuration(
    projects[0].project_duration.start,
    projects[0].project_duration.end
  );

  /*
  console.log(`Project Duration: ${duration} days`);
  */

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
                    <h3>Github: Client Side</h3>
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
                    <h3>Github: Server Side</h3>
                      <a
                        href="https://github.com/Jaturaput-Jongsubcharoen/Server-Jaturaput-Portfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidingHyperLink"
                      >
                        https://github.com/Jaturaput-Jongsubcharoen/Server-Jaturaput-Portfolio.git
                      </a>
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
                        jjongsub@my.centennialcollege.ca
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
              <div className="Grid-1-1 fade"></div>
              <div className="Grid-1-2 fade"></div>
              <div className="Grid-1-3 fade"></div>
              <div className="Grid-1-4 fade"></div>
              <div className="Grid-1-5 fade"></div>
              <div className="Grid-1-6 fade"></div>
              <div className="Grid-1-7 fade"></div>
              <div className="Grid-1-8 fade"></div>
              <div className="Grid-1-9 fade"></div>
              <div className="Grid-1-10 fade"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-2-1 fade"></div>
              <div className="Grid-2-2 fade"></div>
              <div className="Grid-2-3 fade"></div>
              <div className="Grid-2-4 fade"></div>
              <div className="Grid-2-5 fade"></div>
              <div className="Grid-2-6 fade"></div>
              <div className="Grid-2-7 fade"></div>
              <div className="Grid-2-8 fade"></div>
              <div className="Grid-2-9 fade"></div>
              <div className="Grid-2-10 fade"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-3-1 fade"></div>
              <div className="Grid-3-2 fade"></div>
              <div className="Grid-3-3 fade"></div>
              <div className="Grid-3-4 fade"></div>
              <div className="Grid-3-5 fade"></div>
              <div className="Grid-3-6 fade"></div>
              <div className="Grid-3-7 fade"></div>
              <div className="Grid-3-8 fade"></div>
              <div className="Grid-3-9 fade"></div>
              <div className="Grid-3-10 fade"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-4-1 fade"></div>
              <div className="Grid-4-2 fade"></div>
              <div className="Grid-4-3 fade"></div>
              <div className="Grid-4-4 fade"></div>
              <div className="Grid-4-5 fade"></div>
              <div className="Grid-4-6 fade"></div>
              <div className="Grid-4-7 fade"></div>
              <div className="Grid-4-8 fade"></div>
              <div className="Grid-4-9 fade"></div>
              <div className="Grid-4-10 fade"></div>
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className="Grid-5-1 fade"></div>
              <div className="Grid-5-2 fade"></div>
              <div className="Grid-5-3 fade"></div>
              <div className="Grid-5-4 fade"></div>
              <div className="Grid-5-5 fade"></div>
              <div className="Grid-5-6 fade"></div>
              <div className="Grid-5-7 fade"></div>
              <div className="Grid-5-8 fade"></div>
              <div className="Grid-5-9 fade"></div>
              <div className="Grid-5-10 fade"></div>
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
                  <div className="sub-grid-item">
                    <div className="sub-grid-item-topic">
                      <h4>SELECT ACADEMIC PROJECTS</h4>
                    </div>
                  </div>
                  {/*
                  <div className="sub-grid-item">
                    <p className="font-size-type-detail">Please click the image below to view the project.</p>
                  </div>
                  */}
                  {/*a:hover*/}
                  <div className="sub-grid-item">
                    <div className="rounded-border-gradient">
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <div className="hover-text"><p>V I E W &nbsp;&nbsp; P R O J E C T</p></div>
                      </a>
                    </div>
                  </div>

                  {/*
                  <div className="sub-grid-item">
                    <h3 className="font-size-type-detail">{selectedProject.type}</h3>
                  </div>
                  */}
                  <div className="sub-grid-item">
                    <p className="font-size-type-image">Please click the image above to view the project.</p>
                  </div>

                  <div className="sub-grid-item">
                    <h4 className="font-size-detail">PROJECT TITLE:&nbsp; {selectedProject.title}</h4>
                  </div>

                  <div className="sub-grid-item">
                    <button className="detail-button" onClick={() => setShowDetails(!showDetails)}>
                      <p>{showDetails ? "Hide Details" : "View Details"}</p>
                    </button>
                  </div>

                  <div className="sub-grid-item">
                    <p className="font-size-pages-detail sub-grid-item-pages">{filteredProjects.indexOf(selectedProject) + 1} / {filteredProjects.length}</p>
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
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              <div className={`project-display ${showDetails ? "fade-in" : "fade-out"}`} style={{ visibility: showDetails ? "visible" : "hidden" }}>
                <div className="sub-grid-detail">
                  <div className="sub-grid-item-detail">
                      <p className="project-detail"><b>Software & Tools:</b></p>
                  </div>
                  <div className="sub-grid-item-detail">
                    {selectedProject.software_and_tools
                      .split(",")
                      .reduce((acc, tool, index) => {
                        const groupIndex = Math.floor(index / 5);
                        if (!acc[groupIndex]) {
                          acc[groupIndex] = []; // Initialize new group - Reminder: Do not change
                        }
                        acc[groupIndex].push(tool.trim()); // Add tool to group - Reminder: Do not change
                        return acc;
                      }, [])
                      .map((group, groupIndex) => (
                        <div key={groupIndex} className="project-tool-group">
                          {group.map((tool, toolIndex) => (
                            <span key={toolIndex} className="project-tool">
                              {tool}
                            </span>
                          ))}
                        </div>
                      ))}
                  </div>
                  <div className="sub-grid-item-detail">
                  </div>

                  <div className="sub-grid-detail2">
                    <div className="sub-grid-item-detail">
                      <p className="project-detail"><b>Start Date:</b></p>
                    </div>
                    <div className="sub-grid-item-detail">
                      <p className="project-detail"><b>End Date:</b></p>
                    </div>
                    <div className="sub-grid-item-detail">
                      <p className="project-detail">
                        {formatDateWithOrdinal(selectedProject.project_duration.start)}
                      </p>
                    </div>
                    <div className="sub-grid-item-detail">
                      <p className="project-detail">
                        {formatDateWithOrdinal(selectedProject.project_duration.end)}
                      </p>
                    </div>
                  </div>
                  <div className="sub-grid-item-detail">
                  </div>

                  <div className="sub-grid-item-detail">
                    <p className="project-detail"><b>Duration:</b></p>
                  </div>
                  <div className="sub-grid-item-detail">
                    <p className="project-detail">
                      {calculateDuration(selectedProject.project_duration.start, selectedProject.project_duration.end)} days
                    </p>
                  </div>
                  <div className="sub-grid-item-detail">
                  </div>

                  <div className="sub-grid-item-detail">
                      <p className="project-detail"><b>Details:</b></p>
                  </div>
                  <div className="sub-grid-item-detail">
                    <p className="project-detail" dangerouslySetInnerHTML={{ __html: selectedProject.detail }}></p>
                  </div>
                </div>
              </div>
              {/*
              <div className="project-gif-box">
                  <img src={g1jo}  />
              </div>
              */}
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