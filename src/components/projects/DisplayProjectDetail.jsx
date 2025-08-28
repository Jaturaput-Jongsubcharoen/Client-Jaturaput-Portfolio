import { formatDateWithOrdinal } from "../../helpers/FormatDate";
import "../../styles/BentoGridDesignCSS.css";

function DisplayProjectDetail({ selectedProject, showDetails, calculateDuration }) {

    // This is a safety guard in case the list is empty
    if (!calculateDuration) return null;
    
    return(
        <>
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
export default DisplayProjectDetail