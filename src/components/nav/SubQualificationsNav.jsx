// components/nav/SubQualificationsNav.jsx
import "./SubQualificationsNav.css";
import certs from "../../data/JaturaputCertificates";
import resumeDocs from "../../data/JaturaputResume";
import transcripts from "../../data/JaturaputTranscripts";

export default function SubQualificationsNav({
  qualOpen, onHoverIn, onHoverOut, onPick, onOpenDoc, onOpenDocs
}) {
  const certDoc   = certs?.[0];
  const resumeDoc = resumeDocs?.[0];

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
            onClick={() => certDoc && onOpenDoc?.(certDoc.title, certDoc.src, certDoc.name)}
            aria-label="Open certificate PDF">
            Certificate
          </button>
        </li>

        <li className="qual-res">
          <button
            className="qual-btn"
            type="button"
            onClick={() => resumeDoc && onOpenDoc?.(resumeDoc.title, resumeDoc.src, resumeDoc.name)}
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
                transcripts.map(t => ({ src: t.src, name: t.name })) // 👈 pass name per item
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
