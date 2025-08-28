import { useState, useEffect } from "react";
import projects from "../data/JaturaputProject"


function DisplayProjectFunction() {

    const [filteredProjects, setFilteredProjects] = useState(projects.filter((project) => project.type === "WEB & MOBILE DESIGN"));
    const [selectedProject, setSelectedProject] = useState(filteredProjects[0]);
    const [showDetails, setShowDetails] = useState(false);

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
        </>
    )
}
export default DisplayProjectFunction