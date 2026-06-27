import { Highlight } from "@/data/content";

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="space-y-2.5">
      {highlights.map((highlight, idx) => (
        <div key={idx} className="highlight-bar">
          <span className="highlight-bar__date">{highlight.date}</span>
          <span className="highlight-bar__body">
            <span>{highlight.description.trimEnd()}</span>
            {highlight.link && (
              <span className="inline-flex items-baseline">
                <a
                  href={highlight.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-2 underline-offset-2 transition-opacity hover:opacity-80"
                >
                  {highlight.link.text}
                </a>
                <span>!</span>
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
