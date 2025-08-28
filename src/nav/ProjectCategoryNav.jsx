import { useState } from "react";
import "../styles/BentoGridDesignCSS.css";

function ProjectCategoryNav({ handleCategoryChange }) {

    return(
        <>
            <p className="grid-nav0-1-menu" style={{ border: "1px solid rgba(255, 255, 255, 0.4)", padding: "6px", boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, .5)",}}>
                PROJECT
            </p>

            <div className="nav-bar-box">
                <div className="grid-nav-container">
                  {/* ARCHITECTURAL DESIGN */}
                  <div
                    className="grid-nav0-2-menu"
                    onClick={() => handleCategoryChange("architectural")}
                  >
                    <p>ARCHITECTURAL</p>
                    <br />
                    <p>DESIGN</p>
                  </div>

                  {/* MAGAZINE DESIGN */}
                  <div
                    className="grid-nav1-menu"
                    onClick={() => handleCategoryChange("magazine")}
                  >
                    <p>MAGAZINE</p>
                    <br />
                    <p>DESIGN</p>
                  </div>

                  {/* WEB DESIGN */}
                  <div
                    className="grid-nav2-menu"
                    onClick={() => handleCategoryChange("web")}
                  >
                    <p>SOFTWARE</p>
                    <br />
                    <p>DEVELOPMENT</p>
                  </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCategoryNav