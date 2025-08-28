import { useState, useEffect } from "react";
import { formatDateWithOrdinal } from "../containers/FormatDate";
import "../styles/BentoGridDesignCSS.css";

import projects from "../data/JaturaputProject"

function DisplayProjectFunction() {

    const [selectedCategory, setSelectedCategory] = useState("web"); // Default category

    const [filteredProjects, setFilteredProjects] = useState(projects.filter((project) => project.type === "WEB & MOBILE DESIGN"));
    const [selectedProject, setSelectedProject] = useState(filteredProjects[0]);
    const [showDetails, setShowDetails] = useState(false);

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

    return(
        <>
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
                    <p className="project-detail"><b>Work Type:</b></p>
                  </div>
                  <div className="sub-grid-item-detail">
                    <p className="project-detail">{selectedProject.work_types}</p>
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
        </>
    )
}
export default DisplayProjectFunction