import Script from "next/script";

/**
 * Optional **Google Analytics 4** (free for normal personal-site traffic).
 * Stats (including rough geography) appear only in your GA dashboard — nothing is shown on the site.
 *
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID at build time (e.g. G-XXXXXXXXXX from GA4 Admin → Data streams).
 */
export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
