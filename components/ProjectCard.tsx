import Image from "next/image";
import { Project } from "@/data/content";
import Badge from "./Badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.links[0];

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8 pb-8 border-b border-slate-200 last:border-b-0">
      {/* Thumbnail - 25% on desktop */}
      <div className="flex-shrink-0 w-full lg:w-1/4">
        {primaryLink ? (
          <a href={primaryLink.url} target="_blank" rel="noopener noreferrer" className="block">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={200}
              height={150}
              className="w-full h-auto rounded-lg object-cover hover:opacity-90 transition-opacity"
            />
          </a>
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={200}
            height={150}
            className="w-full h-auto rounded-lg object-cover"
          />
        )}
      </div>

      {/* Content - 75% on desktop */}
      <div className="flex-1 lg:w-3/4">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 flex items-center gap-1"
            >
              {project.title}
              <ExternalLink className="w-4 h-4 inline" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Authors */}
        <p className="text-sm text-slate-600 mb-1">{project.authors}</p>

        {/* Venue */}
        <div className="mb-2">
          <Badge variant="accent">{project.venue}</Badge>
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-slate-900 underline"
              >
                [{link.name}]
              </a>
            ))}
          </div>
        )}

        {/* Abstract */}
        <p className="text-sm text-slate-700 leading-relaxed mt-2">{project.description}</p>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag, idx) => (
              <Badge key={idx}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

