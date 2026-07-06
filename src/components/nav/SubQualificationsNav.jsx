// components/nav/SubQualificationsNav.jsx
import "./SubQualificationsNav.css";
import certs from "../../data/JaturaputCertificates";
import resumeDocs from "../../data/JaturaputResume";
import transcripts from "../../data/JaturaputTranscripts";

export default function SubQualificationsNav({
  qualOpen, onHoverIn, onHoverOut, onPick, onOpenDoc, onOpenDocs
}) {
  return (
    <>
      <div className={`qualifications-col-bg ${qualOpen ? "is-open" : ""}`}
           aria-hidden={!qualOpen}
           onMouseEnter={onHoverIn}
           onMouseLeave={onHoverOut} />

      <ul className={`qualifications-col ${qualOpen ? "is-open" : ""}`}
          aria-label="Qualifications"
          aria-hidden={!qualOpen}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}>

        <li className="qual-cer">
          <button
            className="qual-btn"
            type="button"
            onClick={() =>
              onOpenDocs?.(
                "Certificate",
                certs.map(c => ({ src: c.src, name: c.name }))
              )
            }
            aria-label="Open certificate PDFs">
            Certificate
          </button>
        </li>

        <li className="qual-res">
          <button
            className="qual-btn"
            type="button"
            onClick={() =>
              onOpenDocs?.(
                "Résumé",
                resumeDocs.map(r => ({ src: r.src, name: r.name }))
              )
            }
            aria-label="Open résumé PDF">
            Résumé
          </button>
        </li>

        <li className="qual-tra">
          <button
            className="qual-btn"
            type="button"
            onClick={() =>
              onOpenDocs?.(
                "Transcript",
                transcripts.map(t => ({ src: t.src, name: t.name }))
              )
            }
            aria-label="Open transcripts">
            Transcript
          </button>
        </li>
      </ul>
    </>
  );
}
