"use client";

import Image from "next/image";
import { content } from "@/data/content";
import { Github, Mail, Linkedin, GraduationCap } from "lucide-react";

export default function Sidebar() {
  const { profile } = content;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto w-full lg:w-1/3 xl:w-1/4 bg-white p-6 lg:p-8 border-r border-slate-200">
      <div className="flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6">
          <Image
            src={profile.image}
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-full border-4 border-slate-200 object-cover"
            unoptimized
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center lg:text-left">
          {profile.name}
        </h1>

        {/* Tagline */}
        <h2 className="text-lg text-slate-600 mb-4 text-center lg:text-left">
          {profile.tagline}
        </h2>

        {/* Bio */}
        <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center lg:text-left">
          {profile.bio}
        </p>

        {/* Navigation */}
        <nav className="w-full mb-6">
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("research")}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
              >
                Research
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
              >
                Experience
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
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
              className="text-slate-600 hover:text-slate-900 transition-colors"
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
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Google Scholar"
            >
              <GraduationCap className="w-5 h-5" />
            </a>
          )}
          {profile.social.email && (
            <a
              href={`mailto:${profile.social.email}`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}

