// src/components/decor/DiagonalPortTitle.jsx
import "./DiagonalPortTitle.css";
import LetterBox from "./LetterBox";

function DiagonalPortTitle() {
  return (
    <>
      <LetterBox className="r1-c2-location" tiltX="0deg" tiltZ="0deg" depth="92px">
        <span style={{ "--i": 0 }}><h2>P</h2></span>
        <span style={{ "--i": 1 }} />
        <span style={{ "--i": 2 }} />
        <span style={{ "--i": 3 }} />
      </LetterBox>

      <LetterBox className="r2-c3-location" tiltX="0deg" tiltZ="0deg" depth="92px">
        <span style={{ "--i": 0 }}><h2>O</h2></span>
        <span style={{ "--i": 1 }} />
        <span style={{ "--i": 2 }} />
        <span style={{ "--i": 3 }} />
      </LetterBox>

      <LetterBox className="r3-c4-location" tiltX="0deg" tiltZ="0deg" depth="92px">
        <span style={{ "--i": 0 }}><h2>R</h2></span>
        <span style={{ "--i": 1 }} />
        <span style={{ "--i": 2 }} />
        <span style={{ "--i": 3 }} />
      </LetterBox>

      <LetterBox className="r4-c5-location" tiltX="0deg" tiltZ="0deg" depth="92px">
        <span style={{ "--i": 0 }}><h2>T</h2></span>
        <span style={{ "--i": 1 }} />
        <span style={{ "--i": 2 }} />
        <span style={{ "--i": 3 }} />
      </LetterBox>
    </>
  );
}
export default DiagonalPortTitle;
