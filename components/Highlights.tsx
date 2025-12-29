import { Highlight } from "@/data/content";

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="space-y-4">
      {highlights.map((highlight, idx) => (
        <div key={idx} className="flex gap-6 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white/70 hover:shadow-sm transition-all">
          {/* Date Column */}
          <div className="flex-shrink-0 w-28">
            <p className="text-base font-semibold text-slate-900">{highlight.date}</p>
          </div>
          {/* Description Column */}
          <div className="flex-1">
            <p className="text-base text-slate-700 leading-relaxed">
              {highlight.description}
              {highlight.link && (
                <a
                  href={highlight.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-slate-600 underline decoration-2 underline-offset-2 transition-colors"
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

