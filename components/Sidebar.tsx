"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import { Github, Mail, Linkedin, GraduationCap, FileText, Sun, Moon } from "lucide-react";

export default function Sidebar() {
  const { profile } = content;
  const [activeSection, setActiveSection] = useState<string>("highlights");
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.dataset.theme === "dark";
  });
  const isScrollingRef = useRef<boolean>(false);
  const targetSectionRef = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Clear any pending timeout from previous clicks
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set the target section and disable observer updates
      targetSectionRef.current = id;
      isScrollingRef.current = true;
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
      
      // Re-enable observer after scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        targetSectionRef.current = null;
      }, 1200); // Increased timeout to ensure smooth scroll completes
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
      // Completely ignore observer updates during programmatic scrolling
      if (isScrollingRef.current) return;
      
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
      // Clean up timeout on unmount
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Keep toggle state in sync with the HTML attribute set by the inline theme initializer.
    setIsDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggleTheme = () => {
    // Persist in localStorage for subsequent visits.
    setIsDark((prev) => {
      const nextTheme = prev ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      try {
        localStorage.setItem("theme", nextTheme);
      } catch {
        // Ignore localStorage failures (e.g. privacy mode).
      }
      return nextTheme === "dark";
    });
  };

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
    <aside
      className={`lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto w-full lg:w-1/3 xl:w-1/4 sidebar-gradient p-6 lg:p-8 shadow-lg border-r ${
        isDark ? "border-slate-700/50" : "border-slate-300/50"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6 relative">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${
              isDark ? "from-slate-700 to-slate-600" : "from-slate-200 to-slate-400"
            } blur-xl opacity-50 -z-10`}
          ></div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="absolute -top-3 -left-3 z-20 p-2 rounded-full border backdrop-blur-md shadow-sm transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.85)" : "rgba(248, 250, 252, 0.92)",
              color: isDark ? "rgba(248, 250, 252, 0.95)" : "rgba(15, 23, 42, 0.9)",
              borderColor: isDark ? "rgba(51, 65, 85, 0.75)" : "rgba(226, 232, 240, 0.95)",
            }}
          >
            {isDark ? <Sun className="w-5 h-5" aria-hidden /> : <Moon className="w-5 h-5" aria-hidden />}
          </button>

          <Image
            src={profile.image}
            alt={profile.name}
            width={180}
            height={180}
            className={`rounded-full object-cover aspect-square shadow-xl ring-4 ${
              isDark ? "ring-slate-700/50" : "ring-slate-200/50"
            }`}
            unoptimized
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-foreground mb-3 text-center lg:text-left">
          {profile.name}
        </h1>

        {/* Social Links */}
        <div className="flex gap-4 justify-center lg:justify-start mb-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-80 transition-all hover:scale-110"
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
              className="text-foreground hover:opacity-80 transition-all hover:scale-110"
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
              className="text-foreground hover:opacity-80 transition-all hover:scale-110"
              aria-label="Google Scholar"
            >
              <GraduationCap className="w-5 h-5" />
            </a>
          )}
          {profile.social.email && (
            <a
              href={`mailto:${profile.social.email}`}
              className="text-foreground hover:opacity-80 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-80 transition-all hover:scale-110"
            aria-label="CV"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        {/* Bio */}
        <p className="text-base text-foreground leading-relaxed mb-6 text-center lg:text-left">
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
                        ? isDark
                          ? "text-foreground bg-gradient-to-r from-slate-700 to-slate-600 shadow-md font-medium"
                          : "text-foreground bg-gradient-to-r from-slate-100 to-slate-200 shadow-md font-medium"
                        : isDark
                        ? "text-foreground hover:opacity-90 hover:bg-slate-800/40"
                        : "text-foreground hover:opacity-90 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 ${
                          isDark ? "bg-slate-300" : "bg-slate-600"
                        } rounded-r-full`}
                      ></span>
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

