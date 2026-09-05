// components/projects/DisplayProjectPanel.jsx
import "./DisplayProjectPanel.css";
import "../../styles/layout/ResponsiveGrid.css";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import SocialLinks from "../../data/JaturaputSocialLink"; // to get the readable label

const githubLabel =
  SocialLinks.find(s => s.id === "github")?.label ?? "GitHub";

export default function DisplayProjectPanel({
  sectionRef,
  selectedProject,
  filteredProjects,
  availableProjectCategories = ["ALL"],
  selectedProjectCategory = "ALL",
  mainProjectCategory,
  onProjectCategoryChange = () => {},
  showDetails,
  setShowDetails,
  handlePrev,
  handleNext,
}) {
  const filtersRef = useRef(null);

  useEffect(() => {
    if (filtersRef.current) filtersRef.current.scrollLeft = 0;
  }, [mainProjectCategory]);

  if (!selectedProject) return null;

  const { github_frontend, github_backend, github_machine_learning } = selectedProject;

  return (
    <div className="project-panel" ref={sectionRef}>
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
            <h4 className="project-panel__title">PROJECTS EXPERIENCE</h4>
          </div>

          <div
            ref={filtersRef}
            className="project-panel__filters"
            aria-label="Project subcategories"
          >
            <div className="project-panel__filter-strip">
              {availableProjectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="project-panel__filter-btn"
                  aria-pressed={selectedProjectCategory === category}
                  onClick={(event) => {
                    const button = event.currentTarget;
                    const viewport = filtersRef.current;

                    if (viewport) {
                      const viewportRect = viewport.getBoundingClientRect();
                      const buttonRect = button.getBoundingClientRect();

                      if (buttonRect.left < viewportRect.left) {
                        viewport.scrollLeft -= viewportRect.left - buttonRect.left;
                      } else if (buttonRect.right > viewportRect.right) {
                        viewport.scrollLeft += buttonRect.right - viewportRect.right;
                      }
                    }

                    onProjectCategoryChange(category);
                    requestAnimationFrame(() => {
                      if (!viewport) return;
                      const viewportRect = viewport.getBoundingClientRect();
                      const buttonRect = button.getBoundingClientRect();

                      if (buttonRect.left < viewportRect.left) {
                        viewport.scrollLeft -= viewportRect.left - buttonRect.left;
                      } else if (buttonRect.right > viewportRect.right) {
                        viewport.scrollLeft += buttonRect.right - viewportRect.right;
                      }
                    });
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
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
                decoding="async"
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
              onClick={() => setShowDetails((current) => !current)}
              aria-expanded={showDetails}
            >
              <p>{showDetails ? "Hide Details" : "View Details"}</p>
            </button>

            {(github_frontend || github_backend || github_machine_learning) && (
              <div className="project-panel__code">
                {github_frontend && (
                <a
                    className="project-panel__codebtn"
                    href={github_frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${githubLabel} Frontend`}
                    data-label={`${githubLabel} Frontend`}  // tooltip
                    data-badge="FE"                          // NEW: corner badge
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
                    data-label={`${githubLabel} Backend`}   // tooltip
                    data-badge="BE"                         // NEW: corner badge
                    title={`${githubLabel} Backend`}
                >
                    <FaGithub className="project-panel__codeicon" />
                </a>
                )}
                {github_machine_learning && (
                <a
                    className="project-panel__codebtn"
                    href={github_machine_learning}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${githubLabel} Machine Learning`}
                    data-label={`${githubLabel} Machine Learning`}
                    data-badge="ML"
                    title={`${githubLabel} Machine Learning`}
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
