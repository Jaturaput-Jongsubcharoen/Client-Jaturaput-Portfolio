// src/components/layout/ResponsiveGrid.jsx
import { useEffect, useState } from "react";
import "../../styles/layout/ResponsiveGrid.css";

export default function ResponsiveGrid({ children }) {
  // detect initial cols
  const getCols = () => {
    if (window.innerWidth <= 768) return 4;   // larger phones / tablets
    return 10;                                // desktop
  };

  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const update = () => setCols(getCols());

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = Array.from({ length: 60 });

  // Photo area in grid lines:
  // desktop: rows 3–5 (3/6), cols 4–6 (4/7)
  // phone 3 cols: rows 3–5 (3/6), cols 1–3 (1/4)
  // phone 4 cols: rows 3–5 (3/6), cols 2–4 (2/5)
  let imgArea;
  if (cols === 4) {
    imgArea = { r1: 2, r2: 6, c1: 1, c2: 5 };
  } else {
    imgArea = { r1: 2, r2: 6, c1: 3, c2: 7 };
  }

  const spanRows = imgArea.r2 - imgArea.r1; // 3
  const spanCols = imgArea.c2 - imgArea.c1; // 3

  return (
    <div className="grid-container">
      {items.map((_, i) => {
        const col = (i % cols) + 1;           // 1-based
        const row = Math.floor(i / cols) + 1; // 1-based
        const overPhoto =
          row >= imgArea.r1 && row < imgArea.r2 &&
          col >= imgArea.c1 && col < imgArea.c2;

        // offsets inside the photo block
        const ix = col - imgArea.c1;
        const iy = row - imgArea.r1;

        return (
          <div
            key={i}
            className={`grid-item${overPhoto ? " profile-hit" : ""}`}
            style={{
              gridColumn: `${col} / ${col + 1}`,
              gridRow: `${row} / ${row + 1}`,
              ...(overPhoto && {
                '--ix': ix,
                '--iy': iy,
                '--photo-cols': spanCols,
                '--photo-rows': spanRows,
              })
            }}
          >
            {/* Item {i + 1} */}
          </div>
        );
      })}

      {children}
    </div>
  );
}
