import { Experience } from "@/data/content";
import Badge from "./Badge";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="mb-8 pb-8 border-b border-slate-200 last:border-b-0">
      {/* Title and Company */}
      <div className="mb-2">
        <h3 className="text-xl font-bold text-slate-900 inline">
          {experience.title}
        </h3>
        <span className="text-slate-600 mx-2">•</span>
        <span className="text-xl text-slate-700 font-medium">
          {experience.company}
        </span>
        {experience.location && (
          <>
            <span className="text-slate-600 mx-2">•</span>
            <span className="text-base text-slate-600">{experience.location}</span>
          </>
        )}
      </div>

      {/* Date */}
      <p className="text-base text-slate-500 mb-3 italic">{experience.date}</p>

      {/* Description Bullets */}
      <ul className="list-disc list-inside mb-3 space-y-2">
        {experience.description.map((bullet, idx) => (
          <li key={idx} className="text-base text-slate-700 leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      {experience.tags && experience.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {experience.tags.map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}

