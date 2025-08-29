import { useEffect, useState } from "react";

import ResponsiveGrid from "../components/layout/ResponsiveGrid";

import DisplayMyPictureProfile from "../components/projects/DisplayMyPictureProfile";
import HamburgerNav from "../components/nav/HamburgerNav";
import DisplayProjectDetail from "../components/projects/DisplayProjectDetail.jsx";
import DisplayProjectFunction from "../components/projects/DisplayProject.jsx";

import projects from '../data/JaturaputProject.js';


export default function BentoGridDesignBackup5() {
  const [selectedCategory, setSelectedCategory] = useState("web"); // "web" | "magazine" | "architectural"
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter(p => p.type === "WEB & MOBILE DESIGN")
  );
  const [selectedProject, setSelectedProject] = useState(filteredProjects[0] || null);
  const [showDetails, setShowDetails] = useState(false);

  // Re-filter whenever the category changes
  useEffect(() => {
    const filtered = projects.filter(project => {
      if (selectedCategory === "web") return project.type === "WEB & MOBILE DESIGN";
      if (selectedCategory === "magazine") return project.type === "MAGAZINE DESIGN";
      if (selectedCategory === "architectural") return project.type === "ARCHITECTURAL DESIGN";
      return false;
    });
    setFilteredProjects(filtered);
    setSelectedProject(filtered[0] || null);
    setShowDetails(false);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => setSelectedCategory(category);

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
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (endDate - startDate) / (1000 * 60 * 60 * 24);
  };

  return (
    <ResponsiveGrid>
      {/* Hover menu; when a category is chosen it calls this */}
      <HamburgerNav onPickCategory={handleCategoryChange} />

      {/* Your overlapping image (already positioned by its own CSS) */}
      <DisplayMyPictureProfile />

      {/* Project viewer (use your existing CSS to place it where you want) */}
      <DisplayProjectFunction
        selectedProject={selectedProject}
        filteredProjects={filteredProjects}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      {/* Project details panel */}
      <DisplayProjectDetail
        selectedProject={selectedProject}
        showDetails={showDetails}
        calculateDuration={calculateDuration}
      />
    </ResponsiveGrid>
  );
}
