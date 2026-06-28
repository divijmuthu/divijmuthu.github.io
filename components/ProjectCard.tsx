import Image from "next/image";
import { Project } from "@/data/content";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  showVenue?: boolean;
}

export default function ProjectCard({ project, showVenue = false }: ProjectCardProps) {
  const primaryLink = project.links[0];

  return (
    <div className="item-card flex flex-col lg:flex-row lg:items-center gap-4 p-5 mb-5 last:mb-0">
      {/* Thumbnail - 25% on desktop, vertically centered */}
      <div className="flex-shrink-0 w-full lg:w-1/4 flex items-center justify-center">
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
        <h3 className="text-xl font-bold text-foreground mb-2">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 flex items-center gap-1"
            >
              {project.title}
              <ExternalLink className="w-5 h-5 inline" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Authors */}
        <p className="text-base text-foreground mb-2">
          {project.authors.split(", ").map((author, idx, arr) => {
            const isBold = author === "Divij Muthu" || author.startsWith("Divij Muthu");
            const isLast = idx === arr.length - 1;
            return (
              <span key={idx}>
                {isBold ? (
                  <strong className="font-semibold text-foreground">{author}</strong>
                ) : (
                  author
                )}
                {!isLast && ", "}
              </span>
            );
          })}
        </p>

        {showVenue && project.venue && (
          <div className="mb-2">
            <span className="sketch-badge">{project.venue}</span>
          </div>
        )}

        {/* Abstract */}
        <p className="text-base text-foreground leading-relaxed mt-2">{project.description}</p>
      </div>
    </div>
  );
}

