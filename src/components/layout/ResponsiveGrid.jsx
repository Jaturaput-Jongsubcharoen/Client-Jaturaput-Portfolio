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

  // Define two separate photo areas (desktop vs mobile)
  let imgArea1, imgArea2;

  if (cols === 4) {
    // mobile: 4 columns
    imgArea1 = { r1: 2, r2: 6, c1: 1, c2: 5 }; // Profile2
    imgArea2 = { r1: 11, r2: 15, c1: 1, c2: 5 }; // Profile (stacked lower)
  } else {
    // desktop: 10 columns
    imgArea1 = { r1: 2, r2: 6, c1: 1, c2: 5 }; // Profile2 (left)
    imgArea2 = { r1: 2, r2: 6, c1: 3, c2: 7 }; // Profile (right overlap)
  }

  const spanRows1 = imgArea1.r2 - imgArea1.r1;
  const spanCols1 = imgArea1.c2 - imgArea1.c1;
  const spanRows2 = imgArea2.r2 - imgArea2.r1;
  const spanCols2 = imgArea2.c2 - imgArea2.c1;

  return (
    <div className="grid-container fade">
      {items.map((_, i) => {
        const col = (i % cols) + 1;           // 1-based
        const row = Math.floor(i / cols) + 1; // 1-based

        // check if this cell is inside photo area 1 or 2
        const overPhoto1 =
          row >= imgArea1.r1 && row < imgArea1.r2 &&
          col >= imgArea1.c1 && col < imgArea1.c2;

        const overPhoto2 =
          row >= imgArea2.r1 && row < imgArea2.r2 &&
          col >= imgArea2.c1 && col < imgArea2.c2;

        // offsets inside the photo block
        const ix1 = col - imgArea1.c1;
        const iy1 = row - imgArea1.r1;
        const ix2 = col - imgArea2.c1;
        const iy2 = row - imgArea2.r1;

        return (
          <div
            key={i}
            className={`fade grid-item${
              overPhoto1 ? " profile-hit photo1" :
              overPhoto2 ? " profile-hit photo2" : ""
            }`} 
            style={{
              gridColumn: `${col} / ${col + 1}`,
              gridRow: `${row} / ${row + 1}`,
              ...(overPhoto1 && {
                '--ix': ix1,
                '--iy': iy1,
                '--photo-cols': spanCols1,
                '--photo-rows': spanRows1,
              }),
              ...(overPhoto2 && {
                '--ix': ix2,
                '--iy': iy2,
                '--photo-cols': spanCols2,
                '--photo-rows': spanRows2,
              }),
            }}
          >
            {/* optionally debug: Item {i + 1} */}
          </div>
        );
      })}

      {children}
    </div>
  );
}
