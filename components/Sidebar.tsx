"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import { Github, Mail, Linkedin, GraduationCap } from "lucide-react";

export default function Sidebar() {
  const { profile } = content;
  const [activeSection, setActiveSection] = useState<string>("highlights");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ["highlights", "research", "projects", "experience", "media-reviews"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navItems = [
    { id: "highlights", label: "Highlights" },
    { id: "research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    ...(content.mediaReviews && content.mediaReviews.length > 0
      ? [{ id: "media-reviews", label: "Extras" }]
      : []),
  ];

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto w-full lg:w-1/3 xl:w-1/4 sidebar-gradient p-6 lg:p-8 border-r border-slate-300/50 shadow-lg">
      <div className="flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 blur-xl opacity-50 -z-10"></div>
          <Image
            src={profile.image}
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-full object-cover aspect-square shadow-xl ring-4 ring-slate-200/50"
            unoptimized
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center lg:text-left">
          {profile.name}
        </h1>

        {/* Social Links */}
        <div className="flex gap-4 justify-center lg:justify-start mb-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {profile.social.scholar && (
            <a
              href={profile.social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all hover:scale-110"
              aria-label="Google Scholar"
            >
              <GraduationCap className="w-5 h-5" />
            </a>
          )}
          {profile.social.email && (
            <a
              href={`mailto:${profile.social.email}`}
              className="text-slate-600 hover:text-slate-900 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Bio */}
        <p className="text-base text-slate-700 leading-relaxed mb-6 text-center lg:text-left">
          {profile.bio}
        </p>

        {/* Navigation */}
        <nav className="w-full mb-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2.5 text-base rounded-lg transition-all relative ${
                      isActive
                        ? "text-slate-900 bg-gradient-to-r from-slate-100 to-slate-200 shadow-md font-medium"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-slate-600 rounded-r-full"></span>
                    )}
                    <span className={isActive ? "ml-1" : ""}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

