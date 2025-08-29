import { useEffect, useState } from "react";
import "../../styles/layout/ResponsiveGrid.css";

export default function ResponsiveGrid({ children }) {
  // 10 columns on desktop, 3 on phone
  const [cols, setCols] = useState(window.innerWidth <= 768 ? 3 : 10);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setCols(mq.matches ? 3 : 10);
    // support older browsers
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    update();
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  const items = Array.from({ length: 60 });

  return (
    <div className="grid-container">
        {items.map((_, i) => {
            const col = (i % cols) + 1;              // 1-based
            const row = Math.floor(i / cols) + 1;    // 1-based
            return (
            <div
                key={i}
                className="grid-item"
                style={{ gridColumn: `${col} / ${col + 1}`, gridRow: `${row} / ${row + 1}` }}
            >
                {/* Item {i + 1} */}
            </div>
            );
        })}
        
        {children}
    </div>
  );
}
