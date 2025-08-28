import "./ResponsiveGrid.css";
import DisplayMyPictureProfile from "../projects/DisplayMyPictureProfile";

export default function ResponsiveGrid() {
  return (
    <div className="grid-container">
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className="grid-item">
          Item {i + 1}
        </div>
      ))}
        <DisplayMyPictureProfile />
    </div>
  );
}