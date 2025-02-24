import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../containers/NavigationBar';
import '../styles/BentoGridDesignCSS.css';

import MovieAddictLogo from '../images/logos/Movie-Addict-Logo2.png';
import jaturaputLogo from '../images/logos/jaturaput-logo.png';
import MyPicture from '../images/my_picture1(500x750).png';

import MovieAddict from '../images/screenshots/Movie-Addict(1900x1080).png';
import Tesla from '../images/screenshots/Tesla(1900x1080).png';
import NutriKcal from '../images/screenshots/Nutri-Kcal(1900x1080).png';
import QueueMeMobileApp from '../images/screenshots/QueueMe-Mobile-App3(475x986).png';

import MagazineDesign from '../images/screenshots/Magazine-Design(1900x1080).png';

import AWIIHouseWorkExperience from '../images/screenshots/AWIIHouse-Work-Experience(3508x2480)-300PxInch.png';


function BentoGridDesignBackup1() {

  const webDesignImages = [
    MovieAddict,
    Tesla,
    NutriKcal,
    QueueMeMobileApp,
  ];
  
  const magazineDesignImages = [
    MagazineDesign,
  ];
  
  const architecturalDesignImages = [
    AWIIHouseWorkExperience,
  ];
  
  // State for selected category and images
  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category
  const [selectedImage, setSelectedImage] = useState(webDesignImages[0]); // Default image
  const [images, setImages] = useState(webDesignImages); // Default image array
  
  // Image links for WEB DESIGN only
  const imageLinks = {
    [MovieAddict]: "http://studentweb.cencol.ca/jjongsub/Individual_Project/Individual_Project.html",
    [Tesla]: "http://studentweb.cencol.ca/jjongsub/Assignment3/assignment3.html",
    [NutriKcal]: "https://comp229-nutrisnap-client1.onrender.com/",
    [QueueMeMobileApp]: "https://bit.ly/ClinicMobileApp-Figma",
    [MagazineDesign]: "https://online.fliphtml5.com/iikvd/lmou/?1639471606477#p=2",
    [AWIIHouseWorkExperience]: "public/pdf/2_Jaturaput_Working at Wittawii Company_Porfolio.pdf",
  };
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  
    if (category === "web") {
      setImages(webDesignImages);
      setSelectedImage(webDesignImages[0]);
    } else if (category === "magazine") {
      setImages(magazineDesignImages);
      setSelectedImage(magazineDesignImages[0]);
    } else if (category === "architectural") {
      setImages(architecturalDesignImages);
      setSelectedImage(architecturalDesignImages[0]);
    }
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
  };

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
                Contact
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

              {/*a:hover*/}
              <a
                href={imageLinks[selectedImage]}
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                src={selectedImage}
              />
              </a>

              <button onClick={handleNext} className="right-arrow-Sliding">
                &#8594; {/* Right arrow */}
              </button>
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

export default BentoGridDesignBackup1;