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
    <div className="flex flex-col lg:flex-row gap-4 mb-8 pb-8 border-b border-slate-200/60 last:border-b-0">
      {/* Thumbnail - 25% on desktop */}
      <div className="flex-shrink-0 w-full lg:w-1/4">
        {primaryLink ? (
          <a href={primaryLink.url} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={200}
                height={150}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
          </a>
        ) : (
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={200}
              height={150}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Content - 75% on desktop */}
      <div className="flex-1 lg:w-3/4">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 flex items-center gap-1"
            >
              {project.title}
              <ExternalLink className="w-5 h-5 inline" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Authors */}
        <p className="text-base text-slate-600 mb-2">
          {project.authors.split(", ").map((author, idx, arr) => {
            const isBold = author === "Divij Muthu" || author.startsWith("Divij Muthu");
            const isLast = idx === arr.length - 1;
            return (
              <span key={idx}>
                {isBold ? (
                  <strong className="font-semibold text-slate-900">{author}</strong>
                ) : (
                  author
                )}
                {!isLast && ", "}
              </span>
            );
          })}
        </p>

        {/* Venue */}
        <div className="mb-2">
          <Badge variant="subtitle">{project.venue}</Badge>
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-slate-600 hover:text-slate-900 underline"
              >
                [{link.name}]
              </a>
            ))}
          </div>
        )}

        {/* Abstract */}
        <p className="text-base text-slate-700 leading-relaxed mt-2">{project.description}</p>

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

