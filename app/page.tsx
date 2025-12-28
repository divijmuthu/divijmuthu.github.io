import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import Highlights from "@/components/Highlights";
import Hobbies from "@/components/Hobbies";
import { content } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Sidebar */}
        <Sidebar />

        {/* Right Column - Scrollable Content */}
        <main className="flex-1 lg:w-2/3 xl:w-3/4 p-6 lg:p-12">
          {/* Highlights Section */}
          <section id="highlights" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Highlights</h2>
            <Highlights highlights={content.highlights} />
          </section>

          {/* Research Section */}
          <section id="research" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Research</h2>
            <div>
              {content.research.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Projects</h2>
            <div>
              {content.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>

          {/* Experience Section (Internships) */}
          <section id="experience" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience</h2>
            <div>
              {content.experiences.map((experience, idx) => (
                <ExperienceCard key={idx} experience={experience} />
              ))}
            </div>
          </section>

          {/* Hobbies Section */}
          {content.profile.hobbies && content.profile.hobbies.length > 0 && (
            <section id="hobbies" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Hobbies</h2>
              <Hobbies hobbies={content.profile.hobbies} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

