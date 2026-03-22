import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const siteUrl = "https://divijmuthu.github.io";

export const metadata: Metadata = {
  title: "Divij Muthu's Website",
  description: "Divij Muthu is a Computer Science student at UC Berkeley working on 3D image reconstruction via ultrasound transducers and compressed sensing. Research in Liwei Lin Lab, IEEE MEMS 2026 accepted paper.",
  keywords: ["Divij Muthu", "UC Berkeley", "EECS", "Computer Science", "IEEE MEMS 2026", "3D Image Reconstruction", "Compressed Sensing", "Signal Processing", "Machine Learning"],
  authors: [{ name: "Divij Muthu" }],
  creator: "Divij Muthu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Divij Muthu's Website",
    description: "Research portfolio of Divij Muthu - Computer Science student at UC Berkeley working on 3D image reconstruction and signal processing.",
    siteName: "Divij Muthu's Website",
    images: [
      {
        url: `${siteUrl}/images/profile.jpg`,
        width: 1200,
        height: 1200,
        alt: "Divij Muthu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divij Muthu's Website",
    description: "Research portfolio of Divij Muthu - Computer Science student at UC Berkeley.",
    images: [`${siteUrl}/images/profile.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { profile } = content;
  
  // Structured data for SEO (JSON-LD)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "url": siteUrl,
    "image": `${siteUrl}${profile.image}`,
    "jobTitle": "Computer Science Student",
    "worksFor": {
      "@type": "Organization",
      "name": "UC Berkeley",
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "UC Berkeley",
    },
    "sameAs": [
      profile.social.github,
      profile.social.linkedin,
    ].filter(Boolean),
    "email": profile.social.email,
  };

  return (
    <html lang="en">
      <head>
        {/* Initialize theme before React hydrates to avoid visual flash. */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem('theme');var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=(stored==='dark'||stored==='light')?stored:(prefersDark?'dark':'light');document.documentElement.dataset.theme=theme;}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${ebGaramond.variable} ${cinzel.variable} ${ebGaramond.className}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

