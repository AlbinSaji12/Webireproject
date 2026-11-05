import { Fragment, type CSSProperties } from "react";

/**
 * Splits heading text into words that blur in one by one when scrolled into
 * view (the same effect as the hero headline). Pass several lines to keep
 * explicit line breaks. Must sit inside an element with data-reveal="words".
 */
export default function RevealWords({
  lines,
  stagger = 80,
  delay = 0,
}: {
  lines: string[];
  stagger?: number;
  delay?: number;
}) {
  let index = 0;

  return lines.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(" ").map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          {wordIndex > 0 && " "}
          <span
            className="reveal-word"
            style={{ "--d": `${delay + index++ * stagger}ms` } as CSSProperties}
          >
            {word}
          </span>
        </Fragment>
      ))}
    </Fragment>
  ));
}
