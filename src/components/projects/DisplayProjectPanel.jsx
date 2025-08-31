// components/projects/DisplayProjectPanel.jsx
import "./DisplayProjectPanel.css";
import "../../styles/layout/ResponsiveGrid.css";
import { FaGithub } from "react-icons/fa";
import SocialLinks from "../../data/JaturaputSocialLink"; // to get the readable label

const githubLabel =
  SocialLinks.find(s => s.id === "github")?.label ?? "GitHub";

export default function DisplayProjectPanel({
  selectedProject,
  filteredProjects,
  showDetails,
  setShowDetails,
  handlePrev,
  handleNext,
}) {
  if (!selectedProject) return null;

  const { github_frontend, github_backend } = selectedProject;

  return (
    <div className="project-panel">
      <div className="project-panel__layout">
        <button
          onClick={handlePrev}
          className="project-panel__arrow project-panel__arrow--left"
          aria-label="Previous project"
        >
          &#8592;
        </button>

        <div className="project-panel__content">
          <div className="project-panel__header">
            <h4 className="project-panel__title">SELECT ACADEMIC PROJECTS</h4>
          </div>

          <div className="project-panel__image-wrap">
            <a
              className="project-panel__image-link"
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-panel__image"
                src={selectedProject.image}
                alt={selectedProject.title}
              />
              <div className="project-panel__image-hover">
                <p>V I E W &nbsp;&nbsp; P R O J E C T</p>
              </div>
            </a>
          </div>

          <p className="project-panel__hint">
            Please click the image above to view the project.
          </p>

          <h4 className="project-panel__project-title">
            PROJECT TITLE:&nbsp; {selectedProject.title}
          </h4>

          {/* Actions row: Details button + optional GitHub icons on the right */}
          <div className="project-panel__actions">
            <button
              className="project-panel__details-btn"
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
            >
              <p>{showDetails ? "Hide Details" : "View Details"}</p>
            </button>

            {(github_frontend || github_backend) && (
              <div className="project-panel__code">
                {github_frontend && (
                  <a
                    className="project-panel__codebtn"
                    href={github_frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${githubLabel} Frontend`}
                    data-label={`${githubLabel} Frontend`}
                    title={`${githubLabel} Frontend`}
                  >
                    <FaGithub className="project-panel__codeicon" />
                  </a>
                )}
                {github_backend && (
                  <a
                    className="project-panel__codebtn"
                    href={github_backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${githubLabel} Backend`}
                    data-label={`${githubLabel} Backend`}
                    title={`${githubLabel} Backend`}
                  >
                    <FaGithub className="project-panel__codeicon" />
                  </a>
                )}
              </div>
            )}
          </div>

          <p className="project-panel__pager">
            {filteredProjects.indexOf(selectedProject) + 1} / {filteredProjects.length}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="project-panel__arrow project-panel__arrow--right"
          aria-label="Next project"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
