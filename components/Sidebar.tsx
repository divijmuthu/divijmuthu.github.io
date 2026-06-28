"use client";

import { useEffect, useState, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import { Github, Mail, Linkedin, GraduationCap, FileText } from "lucide-react";

function getSidebarNavItems() {
  const items: { id: string; label: string }[] = [
    { id: "highlights", label: "Highlights" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];
  if (content.technicalBooks?.length) {
    items.push({ id: "notes", label: "Notes" });
  }
  if (content.mediaReviews?.length) {
    items.push({ id: "extras", label: "Extras" });
  }
  return items;
}

export default function Sidebar() {
  const { profile } = content;
  const [activeSection, setActiveSection] = useState<string>("highlights");
  const isScrollingRef = useRef<boolean>(false);
  const targetSectionRef = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      targetSectionRef.current = id;
      isScrollingRef.current = true;
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        targetSectionRef.current = null;
      }, 1200);
    }
  };

  useEffect(() => {
    const sections = getSidebarNavItems().map((item) => item.id);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
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
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const navItems = getSidebarNavItems();
  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === activeSection)
  );

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto w-full lg:w-1/3 xl:w-1/4 sidebar-gradient p-6 lg:p-8 shadow-lg border-r border-[var(--border-color)]">
      <div className="flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6 relative">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-40 -z-10"
            style={{
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            }}
          ></div>

          <Image
            src={profile.image}
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-full object-cover aspect-square shadow-xl ring-4 ring-[var(--border-color)]"
            unoptimized
          />
        </div>

        {/* Name + social row (row width matches the name width) */}
        <div className="w-fit mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold text-foreground text-center lg:text-left">
            {profile.name}
          </h1>

          {/* Social Links — spaced across the name width */}
          <div className="mt-3 flex w-full items-center justify-between">
            {profile.social.email && (
              <a
                href={`mailto:${profile.social.email}`}
                className="text-foreground transition-all hover:scale-110 hover:opacity-80"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-all hover:scale-110 hover:opacity-80"
              aria-label="CV"
            >
              <FileText className="w-5 h-5" />
            </a>
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-all hover:scale-110 hover:opacity-80"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.social.scholar && (
              <a
                href={profile.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-all hover:scale-110 hover:opacity-80"
                aria-label="Google Scholar"
              >
                <GraduationCap className="w-5 h-5" />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-all hover:scale-110 hover:opacity-80"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="mt-5 text-base text-foreground leading-relaxed mb-6 text-center lg:text-left">
          {profile.bio}
        </p>

        {/* Navigation */}
        <nav
          className="nav-rail-nav w-full mb-6"
          style={{ "--nav-active-index": activeIndex } as CSSProperties}
        >
          <div className="nav-rail-nav__rail" aria-hidden>
            <div className="nav-rail-nav__line" />
            {navItems.map((item) => (
              <div key={item.id} className="nav-rail-nav__marker-row">
                {activeSection !== item.id && (
                  <span className="nav-rail-nav__bead" />
                )}
              </div>
            ))}
            <div className="nav-rail-nav__orb">
              <span className="nav-rail-nav__orb-core" />
            </div>
          </div>

          <ul className="nav-rail-nav__items">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-item text-base ${
                      isActive ? "nav-item--active" : "nav-item--inactive"
                    }`}
                  >
                    {item.label}
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
