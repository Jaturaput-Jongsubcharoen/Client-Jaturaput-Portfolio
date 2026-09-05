import { useEffect, useMemo, useRef, useState } from "react";

import ResponsiveGrid from "../components/layout/ResponsiveGrid";

import DisplayMyPictureProfile from "../components/projects/DisplayMyPictureProfile";
import DisplayMyPictureProfile2 from "../components/projects/DisplayMyPictureProfile2.jsx";

import HamburgerNav from "../components/nav/HamburgerNav";
import DisplayProjectPanel from "../components/projects/DisplayProjectPanel";
import DisplayProjectDetailPanel from "../components/projects/DisplayProjectDetailPanel";
import SocialLinksPanel from "../components/social/SocialLinksPanel.jsx";

import DiagonalPortTitle from "../components/letters/DiagonalPortTitle.jsx";
import FolioTitle from "../components/letters/FolioTitle.jsx";
import PaintTitle from "../components/letters/PaintTitle.jsx";

import LogoReveal from "../components/branding/LogoReveal.jsx";

import projects from "../data/JaturaputProject.js";

const CATEGORY_TO_TYPE = {
  web: "WEB & MOBILE DESIGN",
  magazine: "MAGAZINE DESIGN",
  architectural: "ARCHITECTURAL DESIGN",
};

const ALL_PROJECT_CATEGORIES = "ALL";

export default function BentoGridDesignPage() {
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState(ALL_PROJECT_CATEGORIES);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const projectsSectionRef = useRef(null);
  const projectDetailRef = useRef(null);
  const wasShowingDetailsRef = useRef(false);
  const [scrollToCategory, setScrollToCategory] = useState(null);

  const mainTypeProjects = useMemo(() => {
    const type = CATEGORY_TO_TYPE[selectedCategory];
    return projects.filter((p) => p.type === type);
  }, [selectedCategory]);

  const availableProjectCategories = useMemo(() => {
    return [
      ALL_PROJECT_CATEGORIES,
      ...new Set(
        mainTypeProjects.flatMap((project) =>
          Array.isArray(project.project_categories)
            ? project.project_categories.filter(
                (category) => typeof category === "string" && category.trim()
              )
            : []
        )
      ),
    ];
  }, [mainTypeProjects]);

  const activeProjectCategory = availableProjectCategories.includes(selectedProjectCategory)
    ? selectedProjectCategory
    : ALL_PROJECT_CATEGORIES;

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === ALL_PROJECT_CATEGORIES) return mainTypeProjects;

    return mainTypeProjects.filter((project) =>
      Array.isArray(project.project_categories) &&
      project.project_categories.includes(activeProjectCategory)
    );
  }, [activeProjectCategory, mainTypeProjects]);

  useEffect(() => {
    if (selectedProjectCategory !== activeProjectCategory) {
      setSelectedProjectCategory(activeProjectCategory);
    }
  }, [activeProjectCategory, selectedProjectCategory]);

  useEffect(() => {
    setSelectedProject(filteredProjects[0] ?? null);
    setShowDetails(false); // close details when switching category
  }, [filteredProjects]);

  useEffect(() => {
    if (!scrollToCategory || selectedProject?.type !== CATEGORY_TO_TYPE[scrollToCategory]) return;

    // Wait for the selected content and the menu's scroll-lock/focus cleanup.
    const frame = requestAnimationFrame(() => {
      if (window.innerWidth <= 768) {
        projectsSectionRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      setScrollToCategory(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [scrollToCategory, selectedProject]);

  useEffect(() => {
    const wasShowingDetails = wasShowingDetailsRef.current;
    wasShowingDetailsRef.current = showDetails;

    if (!showDetails || wasShowingDetails) return;
    if (window.innerWidth > 768) return;

    const frame = requestAnimationFrame(() => {
      projectDetailRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
        inline: "nearest",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [showDetails]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedProjectCategory(ALL_PROJECT_CATEGORIES);
    setShowDetails(false);
    if (window.innerWidth <= 768) setScrollToCategory(cat);
  };

  const handleProjectCategoryChange = (category) => {
    setSelectedProjectCategory(category);
    setShowDetails(false);
  };

  const handlePrev = () => {
    if (!filteredProjects.length || !selectedProject) return;
    const i = filteredProjects.indexOf(selectedProject);
    const newIndex = i === 0 ? filteredProjects.length - 1 : i - 1;
    setSelectedProject(filteredProjects[newIndex]);
  };

  const handleNext = () => {
    if (!filteredProjects.length || !selectedProject) return;
    const i = filteredProjects.indexOf(selectedProject);
    const newIndex = i === filteredProjects.length - 1 ? 0 : i + 1;
    setSelectedProject(filteredProjects[newIndex]);
  };

  const calculateDuration = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    return (e - s) / (1000 * 60 * 60 * 24);
  };

  return (
    <ResponsiveGrid>
      <HamburgerNav onPickCategory={handleCategoryChange} />
      <DisplayMyPictureProfile />
      <DisplayMyPictureProfile2 />

      {selectedProject && (
        <DisplayProjectPanel
          sectionRef={projectsSectionRef}
          selectedProject={selectedProject}
          filteredProjects={filteredProjects}
          availableProjectCategories={availableProjectCategories}
          selectedProjectCategory={activeProjectCategory}
          mainProjectCategory={selectedCategory}
          onProjectCategoryChange={handleProjectCategoryChange}
          onSelectProject={setSelectedProject}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}

      {/* Mount details when only open to avoid layout push on mobile */}
      {selectedProject && (
        <DisplayProjectDetailPanel
          detailRef={projectDetailRef}
          selectedProject={selectedProject}
          showDetails={showDetails}
          calculateDuration={calculateDuration}
        />
      )}

      <SocialLinksPanel   
        links={{
          github: "https://github.com/yourname",
          linkedin: "https://linkedin.com/in/yourname",
          instagram: "https://instagram.com/yourname",
          youtube: "https://youtube.com/@yourname",
        }}
      />

      <DiagonalPortTitle />
      <FolioTitle />
      <PaintTitle />

      <LogoReveal />

    </ResponsiveGrid>
  );
}
