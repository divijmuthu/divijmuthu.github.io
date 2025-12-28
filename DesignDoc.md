# Design Document: "The Barron Remix" Portfolio
**Target Audience:** Academic Mentors, PhD Admissions, Industry Recruiters.
**Goal:** Create a high-performance personal website that retains the information density of the standard "Jon Barron" academic template but utilizes a modern "Split-Screen" UI and a Next.js tech stack.

## 1. High-Level Requirements
* **Aesthetic:** "Split-Screen" Layout.
    * **Left Column (Fixed):** Identity, Bio, Navigation, Contact (The "Hook").
    * **Right Column (Scrollable):** deeply detailed research and project lists (The "Evidence").
* **Performance:** Static export for GitHub Pages hosting (`output: 'export'`).
* **Barron Parity:** The project cards must achieve the same information density as the Jon Barron template (Thumbnail + Title + Authors + Venue + Links + Abstract).
* **No Legacy Code:** We are building from scratch. Do not use Jekyll or raw HTML templates.

## 2. Tech Stack
* **Framework:** Next.js 14+ (App Router).
* **Language:** TypeScript.
* **Styling:** Tailwind CSS (Slate/Zinc neutral color palette).
* **Icons:** Lucide React.
* **Deployment:** GitHub Pages (Static Export).

## 3. Architecture & File Structure
The project should follow this flat structure for ease of maintenance:

```text
/app
  layout.tsx        # Global font (Inter/Geist) and metadata
  page.tsx          # Main Split-Screen Layout Component
  globals.css       # Tailwind directives
/components
  Sidebar.tsx       # Left Column: Profile pic, bio, social links
  ProjectCard.tsx   # Right Column: The "Barron" style research entry
  Badge.tsx         # Small UI chips for tech stack or venue (e.g., "CVPR 2024")
/data
  content.ts        # SINGLE SOURCE OF TRUTH. All text, links, and project data live here.
/public
  /images           # Headshots and Project Thumbnails