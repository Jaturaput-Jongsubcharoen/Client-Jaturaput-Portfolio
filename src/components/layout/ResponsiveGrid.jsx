// src/components/layout/ResponsiveGrid.jsx
import { useEffect, useState } from "react";
import "../../styles/layout/ResponsiveGrid.css";

export default function ResponsiveGrid({ children }) {
  const [cols, setCols] = useState(window.innerWidth <= 768 ? 3 : 10);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setCols(mq.matches ? 3 : 10);
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    update();
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  const items = Array.from({ length: 60 });

  // Photo area in grid lines:
  // desktop: rows 3–5 (3/6), cols 4–6 (4/7)
  // phone:   rows 3–5 (3/6), cols 1–3 (1/4)
  const imgArea = cols <= 3
    ? { r1: 3, r2: 6, c1: 1, c2: 4 }   // phone 3x3
    : { r1: 3, r2: 6, c1: 4, c2: 7 };  // desktop 3x3

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

        // offsets inside the photo block (0..2)
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
                // pass offsets + the overall span to CSS
                '--ix': ix,
                '--iy': iy,
                '--photo-cols': spanCols,
                '--photo-rows': spanRows,
              })
            }}
          >
            {/*Item {i + 1}*/}
          </div>
        );
      })}

      {children}
    </div>
  );
}