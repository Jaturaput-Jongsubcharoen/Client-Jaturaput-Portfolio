import { useState, useEffect } from 'react';
import { formatDateWithOrdinal } from "../helpers/FormatDate.jsx";
//
import "../styles/BentoGridDesignCSS.css";
import '../index.css';

import GridBackground from '../components/layout/GridBackground.jsx';
import PortLetters from '../components/letters/PortLetters.jsx';
import FolioLetters from '../components/letters/FolioLetters.jsx';
import PaintLetters from '../components/letters/PaintLetters.jsx';

import ProjectCategoryNav from '../components/nav/ProjectCategoryNav.jsx';
import ContactsButton from "../components/buttons/ContactsButton.jsx";

import DisplayMyPicture from '../components/projects/DisplayMyPicture.jsx';
import DisplayProject from '../components/projects/DisplayProject.jsx';
import DisplayProjectDetail from '../components/projects/DisplayProjectDetail.jsx';

import jaturaputLogo from '../images/logos/jaturaput-logo.png';
import myPicture1 from "../images/my_picture1(500x750).png";
import myPicture2 from "../images/my_picture2(800x800).png";
import tapePicture from "../images/tape_picture(800x800).png";
import tapePicture2 from "../images/tape_picture2(800x800).png";
import g1jo from "../gif/G1JO.gif";

import projects from '../data/JaturaputProject.js';

function BentoGridDesignBackup3() {

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
              <ProjectCategoryNav handleCategoryChange={handleCategoryChange} />

              <ContactsButton />

              <GridBackground />

              <PortLetters />

              <FolioLetters />

              <PaintLetters />

              <DisplayProject
                selectedProject={selectedProject}
                filteredProjects={filteredProjects}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />

              <DisplayProjectDetail
                selectedProject={selectedProject}
                showDetails={showDetails}
                calculateDuration={calculateDuration}
              />
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              {/*
              <div className="project-tape1-img-box">
                  <img src={tapePicture}  />
              </div>
              
              <div className="project-tape2-img-box">
                  <img src={tapePicture2}  />
              </div>
              */}
              <DisplayMyPicture />
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }
              {/*
              <div className="r2-c4-location">
                  <img src={picturePeices1}  />
              </div>
              */}
              {
                /* ______________________________________________________________________________________________________________________________________________________ */
              }

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

export default BentoGridDesignBackup3;