// components/projects/DisplayProjectPanel.jsx
import "./DisplayProjectPanel.css";
import "../../styles/layout/ResponsiveGrid.css";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { FaCompressAlt, FaExpandAlt, FaFilePdf, FaGithub } from "react-icons/fa";
import SocialLinks from "../../data/JaturaputSocialLink"; // to get the readable label

const githubLabel =
  SocialLinks.find(s => s.id === "github")?.label ?? "GitHub";

const GalleryProjectCard = memo(function GalleryProjectCard({
  project,
  isSelected,
  shouldLoadImmediately,
  onSelect,
}) {
  const cardRef = useRef(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(isSelected || shouldLoadImmediately);

  useEffect(() => {
    if (shouldLoadImage || isSelected || shouldLoadImmediately) {
      setShouldLoadImage(true);
      return undefined;
    }

    const card = cardRef.current;
    const gallery = card?.closest(".project-panel__gallery");

    if (!card || !gallery || !("IntersectionObserver" in window)) {
      setShouldLoadImage(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadImage(true);
        observer.disconnect();
      },
      {
        root: gallery,
        rootMargin: "80px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [isSelected, shouldLoadImage, shouldLoadImmediately]);

  return (
    <button
      ref={cardRef}
      type="button"
      className="project-panel__gallery-item"
      aria-pressed={isSelected}
      onClick={() => onSelect(project)}
    >
      {shouldLoadImage ? (
        <img
          className="project-panel__gallery-image"
          src={project.image}
          alt=""
          loading={isSelected ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <span className="project-panel__gallery-image project-panel__gallery-image--placeholder" />
      )}
      <span className="project-panel__gallery-title">{project.title}</span>
    </button>
  );
});

export default function DisplayProjectPanel({
  sectionRef,
  selectedProject,
  filteredProjects,
  availableProjectCategories = ["ALL"],
  selectedProjectCategory = "ALL",
  mainProjectCategory,
  onProjectCategoryChange = () => {},
  onSelectProject = () => {},
  showDetails,
  setShowDetails,
  handlePrev,
  handleNext,
}) {
  const filtersRef = useRef(null);
  const galleryCloseTimerRef = useRef(null);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [galleryMounted, setGalleryMounted] = useState(false);

  useEffect(() => {
    if (filtersRef.current) filtersRef.current.scrollLeft = 0;
  }, [mainProjectCategory]);

  useEffect(() => () => window.clearTimeout(galleryCloseTimerRef.current), []);

  const openGallery = () => {
    window.clearTimeout(galleryCloseTimerRef.current);
    setShowDetails((current) => (current ? false : current));
    setGalleryMounted(true);
    requestAnimationFrame(() => setGalleryExpanded(true));
  };

  const closeGallery = useCallback(() => {
    window.clearTimeout(galleryCloseTimerRef.current);
    setGalleryExpanded(false);
    const transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : window.innerWidth <= 768 ? 400 : 500;
    galleryCloseTimerRef.current = window.setTimeout(
      () => setGalleryMounted(false),
      transitionDuration
    );
  }, []);

  const handleGalleryProjectSelect = useCallback((project) => {
    onSelectProject(project);
    setShowDetails((current) => (current ? false : current));
    closeGallery();
  }, [closeGallery, onSelectProject, setShowDetails]);

  if (!selectedProject) return null;

  const {
    project_report,
    github_frontend,
    github_backend,
    github_machine_learning,
  } = selectedProject;
  const galleryToggleLabel = galleryExpanded
    ? "Back to project view"
    : "Show all projects";

  return (
    <div
      className={`project-panel ${galleryMounted ? "project-panel--gallery-mounted" : ""} ${galleryExpanded ? "project-panel--expanded" : ""}`}
      ref={sectionRef}
    >
      <button
        type="button"
        className="project-panel__gallery-toggle"
        aria-label={galleryToggleLabel}
        aria-expanded={galleryExpanded}
        data-label={galleryToggleLabel}
        onClick={() => {
          if (galleryExpanded) closeGallery();
          else openGallery();
        }}
      >
        {galleryExpanded ? <FaCompressAlt /> : <FaExpandAlt />}
      </button>

      <div className="project-panel__layout">
        {!galleryMounted && (
          <button
            onClick={handlePrev}
            className="project-panel__arrow project-panel__arrow--left"
            aria-label="Previous project"
          >
            &#8592;
          </button>
        )}

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

          {galleryMounted && (
            <div className="project-panel__gallery" aria-label="Filtered project gallery">
              {filteredProjects.map((project, index) => (
                <GalleryProjectCard
                  key={project.title}
                  project={project}
                  isSelected={selectedProject === project}
                  shouldLoadImmediately={index < 6}
                  onSelect={handleGalleryProjectSelect}
                />
              ))}
            </div>
          )}

          {!galleryMounted && <>
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

          {/* Actions row: Details, optional report, then optional GitHub controls */}
          <div className="project-panel__actions">
            <button
              className="project-panel__details-btn"
              onClick={() => setShowDetails((current) => !current)}
              aria-expanded={showDetails}
            >
              <p>{showDetails ? "Hide Details" : "View Details"}</p>
            </button>

            {(project_report || github_frontend || github_backend || github_machine_learning) && (
              <div className="project-panel__code">
                {project_report && (
                  <a
                    className="project-panel__codebtn"
                    href={project_report}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project report"
                    data-label="View Project Report"
                    data-badge="RP"
                    title="View Project Report"
                  >
                    <FaFilePdf className="project-panel__codeicon" />
                  </a>
                )}

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
          </>}
        </div>

        {!galleryMounted && (
          <button
            onClick={handleNext}
            className="project-panel__arrow project-panel__arrow--right"
            aria-label="Next project"
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}
