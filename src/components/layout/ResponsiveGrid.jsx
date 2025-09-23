// src/components/layout/ResponsiveGrid.jsx
import { useEffect, useState } from "react";
import "../../styles/layout/ResponsiveGrid.css";

export default function ResponsiveGrid({ children }) {
  const getCols = () => (window.innerWidth <= 768 ? 4 : 10);
  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const update = () => setCols(getCols());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = Array.from({ length: 60 });

  // Keep YOUR areas exactly as requested
  let imgArea1, imgArea2;
  if (cols === 4) {
    // mobile stack (no overlap on phone)
    imgArea1 = { r1: 11, r2: 15, c1: 1, c2: 5 }; // Profile2
    imgArea2 = { r1: 2, r2: 6, c1: 1, c2: 5 }; // Profile below
  } else {
    // desktop with overlap on cols 3–5
    imgArea1 = { r1: 2, r2: 6, c1: 1, c2: 5 }; // Profile2 (left)
    imgArea2 = { r1: 2, r2: 6, c1: 3, c2: 7 }; // Profile (right overlap)
  }

  return (
    <div className="grid-container fade">
      {items.map((_, i) => {
        const col = (i % cols) + 1;            // 1-based
        const row = Math.floor(i / cols) + 1;  // 1-based

        const in1 =
          row >= imgArea1.r1 && row < imgArea1.r2 &&
          col >= imgArea1.c1 && col < imgArea1.c2;

        const in2 =
          row >= imgArea2.r1 && row < imgArea2.r2 &&
          col >= imgArea2.c1 && col < imgArea2.c2;

        // 🔑 Overlap rule: if a cell belongs to both, prefer photo2
        let cls = "fade grid-item";
        const style = {
          gridColumn: `${col} / ${col + 1}`,
          gridRow: `${row} / ${row + 1}`,
        };

        if (in1 || in2) {
          const use2 = in2;                 // prefer photo2 on overlap
          const area = use2 ? imgArea2 : imgArea1;
          const ix = col - area.c1;
          const iy = row - area.r1;
          const spanCols = area.c2 - area.c1;
          const spanRows = area.r2 - area.r1;

          cls += use2 ? " profile-hit photo2" : " profile-hit photo1";
          style["--ix"] = ix;
          style["--iy"] = iy;
          style["--photo-cols"] = spanCols;
          style["--photo-rows"] = spanRows;
        }

        return <div key={i} className={cls} style={style} />;
      })}

      {children}
    </div>
  );
}
