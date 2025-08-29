// src/pages/BentoGridDesignBackup5.jsx
import { useEffect, useMemo, useState } from "react";

import ResponsiveGrid from "../components/layout/ResponsiveGrid";
import DisplayMyPictureProfile from "../components/projects/DisplayMyPictureProfile";
import HamburgerNav from "../components/nav/HamburgerNav";
import DisplayProjectPanel from "../components/projects/DisplayProjectPanel";
import DisplayProjectDetailPanel from "../components/projects/DisplayProjectDetailPanel";

import DiagonalPortTitle from "../components/letters/DiagonalPortTitle.jsx";
import FolioTitle from "../components/letters/FolioTitle.jsx";

import projects from "../data/JaturaputProject.js";

const CATEGORY_TO_TYPE = {
  web: "WEB & MOBILE DESIGN",
  magazine: "MAGAZINE DESIGN",
  architectural: "ARCHITECTURAL DESIGN",
};

export default function BentoGridDesignBackup5() {
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredProjects = useMemo(() => {
    const type = CATEGORY_TO_TYPE[selectedCategory];
    return projects.filter((p) => p.type === type);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedProject(filteredProjects[0] ?? null);
    setShowDetails(false); // close details when switching category
  }, [filteredProjects]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
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

      {selectedProject && (
        <DisplayProjectPanel
          selectedProject={selectedProject}
          filteredProjects={filteredProjects}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}

      {/* Mount details when only open to avoid layout push on mobile */}
      {selectedProject && (
        <DisplayProjectDetailPanel
          selectedProject={selectedProject}
          showDetails={showDetails}
          calculateDuration={calculateDuration}
        />
      )}

      <DiagonalPortTitle />
      <FolioTitle />
    </ResponsiveGrid>
  );
}
