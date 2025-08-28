import { useState, useEffect } from 'react';

import "../styles/BentoGridDesignCSS.css";
import '../index.css';

import GridBackground from '../components/layout/GridBackground.jsx';
import PortLetters from '../components/letters/PortLetters.jsx';
import FolioLetters from '../components/letters/FolioLetters.jsx';
import PaintLetters from '../components/letters/PaintLetters.jsx';

import ProjectCategoryNav from '../components/nav/ProjectCategoryNav.jsx';
import ContactsButton from "../components/buttons/ContactsButton.jsx";
import ContactsMenu from '../components/buttons/ContactsMenu.jsx';

import DisplayMyPicture from '../components/projects/DisplayMyPicture.jsx';
import DisplayProject from '../components/projects/DisplayProject.jsx';
import DisplayProjectDetail from '../components/projects/DisplayProjectDetail.jsx';

import projects from '../data/JaturaputProject.js';

function BentoGridDesignPage() {

  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category
  const [filteredProjects, setFilteredProjects] = useState(projects.filter((project) => project.type === "WEB & MOBILE DESIGN"));
  const [selectedProject, setSelectedProject] = useState(filteredProjects[0]);
  
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

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference;
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
      <div className="body-bento-grid-design">
        <div className="container">
          <div className="scrolling-slides">
            <div className="Grid-container">

              <ProjectCategoryNav handleCategoryChange={handleCategoryChange} />

              <ContactsButton />

              <GridBackground />

              <PortLetters />

              <FolioLetters />

              <PaintLetters />

              <DisplayMyPicture />

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
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BentoGridDesignPage;