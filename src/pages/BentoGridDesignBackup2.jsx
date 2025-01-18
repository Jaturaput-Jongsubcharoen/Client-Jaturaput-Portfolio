import { useState } from "react";
import "../styles/BentoGridDesignCSS.css";

import MovieAddict from "../images/screenshots/Movie-Addict(1900x1080).png";
import Tesla from "../images/screenshots/Tesla(1900x1080).png";
import NutriKcal from "../images/screenshots/Nutri-Kcal(1900x1080).png";
import QueueMeMobileApp from "../images/screenshots/QueueMe-Mobile-App3(475x986).png";
import MagazineDesign from "../images/screenshots/Magazine-Design(1900x1080).png";
import AWIIHouseWorkExperience from "../images/screenshots/AWIIHouse-Work-Experience(3508x2480)-300PxInch.png";

function BentoGridDesignBackup2() {
  const projects = [
    {
      image: MovieAddict,
      link: "http://studentweb.cencol.ca/jjongsub/Individual_Project/Individual_Project.html",
      title: "Movie Addict Project",
      type: "web & mobile design",
    },
    {
      image: Tesla,
      link: "http://studentweb.cencol.ca/jjongsub/Assignment3/assignment3.html",
      title: "Tesla Assignment",
      type: "web & mobile design",
    },
    {
      image: NutriKcal,
      link: "https://comp229-nutrisnap-client1.onrender.com/",
      title: "Nutri-Kcal Client Project",
      type: "web & mobile design",
    },
    {
      image: QueueMeMobileApp,
      link: "https://bit.ly/ClinicMobileApp-Figma",
      title: "QueueMe Mobile App",
      type: "web & mobile design",
    },
    {
      image: MagazineDesign,
      link: "https://online.fliphtml5.com/iikvd/lmou/?1639471606477#p=2",
      title: "Magazine Design",
      type: "magazine design",
    },
    {
      image: AWIIHouseWorkExperience,
      link: "public/pdf/2_Jaturaput_Working at Wittawii Company_Porfolio.pdf",
      title: "Wittawii Company Work Experience",
      type: "architectural design",
    },
  ];

  // State for selected category and projects
  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.type === "web & mobile design")
  ); // Default filtered projects
  const [selectedProject, setSelectedProject] = useState(filteredProjects[0]); // Default selected project

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    const filtered = projects.filter((project) => {
      if (category === "web") {
        return project.type === "web & mobile design";
      } else if (category === "magazine") {
        return project.type === "magazine design";
      } else if (category === "architectural") {
        return project.type === "architectural design";
      }
      return false;
    });

    setFilteredProjects(filtered);
    setSelectedProject(filtered[0]);
  };

  // Handle previous project navigation
  const handlePrev = () => {
    const currentIndex = filteredProjects.indexOf(selectedProject);
    const newIndex =
      currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[newIndex]);
  };

  // Handle next project navigation
  const handleNext = () => {
    const currentIndex = filteredProjects.indexOf(selectedProject);
    const newIndex =
      currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <div className="body-bento-grid-design">
      <div className="container">
        <div className="scrolling-slides">
          <div className="Grid-container">
            {/* Navigation */}
            <div className="nav-bar-box">
              <div className="grid-nav-container">
                <div
                  className="grid-nav0-2-menu"
                  onClick={() => handleCategoryChange("web")}
                >
                  <p>WEB & MOBILE</p>
                  <p>DESIGN</p>
                </div>
                <div
                  className="grid-nav1-menu"
                  onClick={() => handleCategoryChange("magazine")}
                >
                  <p>MAGAZINE</p>
                  <p>DESIGN</p>
                </div>
                <div
                  className="grid-nav2-menu"
                  onClick={() => handleCategoryChange("architectural")}
                >
                  <p>ARCHITECTURAL</p>
                  <p>DESIGN</p>
                </div>
              </div>
            </div>

            {/* Project Display */}
            <div className="project-box">
              <button onClick={handlePrev} className="left-arrow-Sliding">
                &#8592; {/* Left arrow */}
              </button>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              </a>

              <h3>{selectedProject.title}</h3> {/* Display project title */}

              <button onClick={handleNext} className="right-arrow-Sliding">
                &#8594; {/* Right arrow */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoGridDesignBackup2;