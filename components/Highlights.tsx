import { Highlight } from "@/data/content";

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="space-y-4">
      {highlights.map((highlight, idx) => (
        <div key={idx} className="flex gap-6">
          {/* Date Column */}
          <div className="flex-shrink-0 w-24">
            <p className="text-sm font-medium text-slate-900">{highlight.date}</p>
          </div>
          {/* Description Column */}
          <div className="flex-1">
            <p className="text-sm text-slate-700 leading-relaxed">
              {highlight.description}
              {highlight.link && (
                <a
                  href={highlight.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-slate-700 underline"
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

