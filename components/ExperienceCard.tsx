import { Experience } from "@/data/content";
import Badge from "./Badge";
import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="mb-8 pb-8 border-b border-[var(--border-color)] last:border-b-0">
      {/* Title and Company */}
      <div className="mb-2">
        <h3 className="text-xl font-bold text-foreground inline">
          {experience.title}
        </h3>
        <span className="text-foreground mx-2">•</span>
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-foreground font-medium hover:opacity-80 underline inline-flex items-center gap-1 transition-opacity"
          >
            {experience.company}
            <ExternalLink className="w-4 h-4 inline" />
          </a>
        ) : (
          <span className="text-xl text-foreground font-medium">
            {experience.company}
          </span>
        )}
        {experience.location && (
          <>
            <span className="text-foreground mx-2">•</span>
            <span className="text-base text-foreground">{experience.location}</span>
          </>
        )}
      </div>

      {/* Date */}
      <p className="text-base text-foreground mb-3 italic">{experience.date}</p>

      {/* Description Bullets */}
      <ul className="list-disc list-inside mb-3 space-y-2">
        {experience.description.map((bullet, idx) => (
          <li key={idx} className="text-base text-foreground leading-relaxed">
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

