import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import Highlights from "@/components/Highlights";
import MediaReviewCard from "@/components/MediaReviewCard";
import { content } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Sidebar */}
        <Sidebar />

        {/* Right Column - Scrollable Content */}
        <main className="flex-1 lg:w-2/3 xl:w-3/4 p-6 lg:p-12">
          {/* Highlights Section */}
          <section
            id="highlights"
            className="mb-12 section-gradient rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Highlights
            </h2>
            <Highlights highlights={content.highlights} />
          </section>

          {/* Research Section */}
          <section
            id="research"
            className="mb-12 section-gradient rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Research
            </h2>
            <div>
              {content.research.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-12 section-gradient rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Projects
            </h2>
            <div>
              {content.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>

          {/* Experience Section (Internships) */}
          <section
            id="experience"
            className="mb-12 section-gradient rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Experience
            </h2>
            <div>
              {content.experiences.map((experience, idx) => (
                <ExperienceCard key={idx} experience={experience} />
              ))}
            </div>
          </section>

          {/* Media Reviews Section */}
          {content.mediaReviews && content.mediaReviews.length > 0 && (
            <section
              id="media-reviews"
              className="mb-12 section-gradient rounded-2xl p-8 shadow-lg backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                Media Reviews
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {content.mediaReviews.map((review, idx) => (
                  <MediaReviewCard key={idx} review={review} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

