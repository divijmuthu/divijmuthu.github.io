import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Divij Muthu - Portfolio",
  description: "Personal website of Divij Muthu - Computer Science Student at UC Berkeley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${cinzel.variable} ${ebGaramond.className}`}>{children}</body>
    </html>
  );
}

