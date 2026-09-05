// src/components/layout/ResponsiveGrid.jsx
import { useEffect, useMemo, useState } from "react";
import "../../styles/layout/ResponsiveGrid.css";

export default function ResponsiveGrid({ children }) {
  const getCols = () => (window.matchMedia("(max-width: 768px)").matches ? 4 : 10);
  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 768px)");
    const update = () => setCols(breakpoint.matches ? 4 : 10);
    breakpoint.addEventListener("change", update);
    return () => breakpoint.removeEventListener("change", update);
  }, []);

  const items = useMemo(() => {
    const imgArea1 =
      cols === 4
        ? { r1: 11, r2: 15, c1: 1, c2: 5 }
        : { r1: 2, r2: 6, c1: 1, c2: 5 };

    const imgArea2 =
      cols === 4
        ? { r1: 2, r2: 6, c1: 1, c2: 5 }
        : { r1: 2, r2: 6, c1: 3, c2: 7 };

    return Array.from({ length: 60 }, (_, i) => {
      const col = (i % cols) + 1;
      const row = Math.floor(i / cols) + 1;

      const in1 =
        row >= imgArea1.r1 && row < imgArea1.r2 &&
        col >= imgArea1.c1 && col < imgArea1.c2;

      const in2 =
        row >= imgArea2.r1 && row < imgArea2.r2 &&
        col >= imgArea2.c1 && col < imgArea2.c2;

      let cls = "fade grid-item";
      const style = {
        gridColumn: `${col} / ${col + 1}`,
        gridRow: `${row} / ${row + 1}`,
      };

      if (in1 || in2) {
        const use2 = in2;
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
    });
  }, [cols]);

  return (
    <div className="grid-container fade">
      {items}
      {children}
    </div>
  );
}
