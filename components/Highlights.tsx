import { Highlight } from "@/data/content";

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="space-y-4">
      {highlights.map((highlight, idx) => (
        <div
          key={idx}
          className="flex gap-6 p-4 rounded-lg bg-[var(--sidebar-bg)] backdrop-blur-sm border border-[var(--border-color)] hover:brightness-105 hover:shadow-sm transition-all"
        >
          {/* Date Column */}
          <div className="flex-shrink-0 w-28">
            <p className="text-base font-semibold text-foreground">{highlight.date}</p>
          </div>
          {/* Description Column */}
          <div className="flex-1">
            <p className="text-base text-foreground leading-relaxed">
              {highlight.description}
              {highlight.link && (
                <a
                  href={highlight.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:opacity-80 underline decoration-2 underline-offset-2 transition-opacity"
                >
                  {highlight.link.text}
                </a>
              )}
              {highlight.link && "!"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

