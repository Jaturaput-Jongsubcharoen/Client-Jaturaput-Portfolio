import { formatDateWithOrdinal } from "../../helpers/FormatDate";
import "./DisplayProjectDetailPanel.css";

export default function DisplayProjectDetailPanel({
  selectedProject,
  showDetails,
  calculateDuration,
}) {
  if (!selectedProject || !calculateDuration) return null;

  return (
    <section
      className={`detail-panel ${showDetails ? "is-open" : ""}`}
      aria-hidden={!showDetails}
    >
      <div className="detail-panel__box">
        {/* Software & Tools */}
        <div className="detail-panel__row">
          <p className="detail-panel__label"><b>Software &amp; Tools:</b></p>
          <div className="detail-panel__tools">
            {selectedProject.software_and_tools
              .split(",")
              .reduce((acc, tool, i) => {
                const g = Math.floor(i / 5);
                (acc[g] ??= []).push(tool.trim());
                return acc;
              }, [])
              .map((group, gi) => (
                <div key={gi} className="detail-panel__tool-group">
                  {group.map((t, ti) => (
                    <span key={ti} className="detail-panel__tool">{t}</span>
                  ))}
                </div>
              ))}
          </div>
        </div>

        {/* Dates */}
        <div className="detail-panel__grid2">
          <p className="detail-panel__label"><b>Start Date:</b></p>
          <p className="detail-panel__label"><b>End Date:</b></p>

          <p className="detail-panel__value">
            {formatDateWithOrdinal(selectedProject.project_duration.start)}
          </p>
          <p className="detail-panel__value">
            {formatDateWithOrdinal(selectedProject.project_duration.end)}
          </p>
        </div>

        {/* Duration */}
        <div className="detail-panel__row">
          <p className="detail-panel__label"><b>Duration:</b></p>
          <p className="detail-panel__value">
            {calculateDuration(
              selectedProject.project_duration.start,
              selectedProject.project_duration.end
            )} days
          </p>
        </div>

        {/* Work Type */}
        <div className="detail-panel__row">
          <p className="detail-panel__label"><b>Work Type:</b></p>
          <p className="detail-panel__value">{selectedProject.work_types}</p>
        </div>

        {/* Details */}
        <div className="detail-panel__row">
          <p className="detail-panel__label"><b>Details:</b></p>
          <div
            className="detail-panel__value"
            dangerouslySetInnerHTML={{ __html: selectedProject.detail }}
          />
        </div>
      </div>
    </section>
  );
}
