# The Portfolio

A modern, high-performance personal website built with Next.js, TypeScript, and Tailwind CSS. This portfolio follows the "Barron Remix" design pattern with a split-screen layout optimized for academic and professional presentation.

## Features

- **Split-Screen Layout**: Fixed left sidebar with profile info, scrollable right column with research and projects
- **Static Export**: Optimized for GitHub Pages hosting
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Modern, responsive design with Slate color palette
- **Information Density**: Research cards match the efficiency of the Jon Barron academic template

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (for testing)
npm start
```

## Deployment to GitHub Pages

The site is configured for static export. After building, the `out` folder contains all static files.

### Manual Deployment

1. Build the project: `npm run build`
2. Copy contents of `out` folder to the root of your repository
3. Commit and push

### Automatic Deployment (GitHub Actions)

The included `.github/workflows/deploy.yml` workflow will automatically build and deploy on push to main.

## Private visitor analytics (optional, free)

This repo can load **Google Analytics 4** (GA4) — **free** for normal personal-site traffic. You only see stats after logging into [Google Analytics](https://analytics.google.com); **nothing** is displayed on the site itself. Reports include **rough geography** (country/region/city level), pages, and traffic sources.

1. In GA4: **Admin → Data streams → Add stream → Web** → set URL to **`https://divijmuthu.github.io`** and copy the **Measurement ID** (`G-XXXXXXXXXX`).
2. **Local:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
3. **GitHub Actions:** **Settings → Secrets and variables → Actions → Variables** → add **`GA_MEASUREMENT_ID`** = your `G-…` id (the workflow maps it to the build).

If unset, **no analytics script** is included.

### Can we skip any service entirely?

**Not really, if you want geography.** GitHub Pages only serves static files — there is **no server** to log visits. Something has to receive page-view events (GA4, Cloudflare Web Analytics, self-hosted Umami on a VPS, etc.). The lightest free options are usually **GA4** or **[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)** (also free; different setup).

## Project Structure

```
/app
  layout.tsx        # Global layout and metadata
  page.tsx          # Main split-screen layout
  globals.css       # Tailwind directives
/components
  Sidebar.tsx       # Left column: Profile, bio, navigation
  ProjectCard.tsx   # Research/project entry component
  Badge.tsx         # UI chip component
/data
  content.ts        # Single source of truth for all content
/public
  /images           # Profile and project images
```

## Customization

Edit `/data/content.ts` to update:
- Profile information
- Research publications
- Software projects
- Social links
- Media reviews (see `MEDIA_REVIEWS_GUIDE.md`)

## SEO Optimization

The site includes comprehensive SEO optimization:
- **Meta Tags**: Title, description, keywords optimized for "Divij Muthu"
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD Person schema for Google Knowledge Graph
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions

To improve search visibility:
1. Ensure your GitHub Pages site is public
2. Submit sitemap to Google Search Console: `https://divijmuthu.github.io/sitemap.xml`
3. Add your site to Google Search Console
4. Share your site on LinkedIn and other profiles

## License

MIT

