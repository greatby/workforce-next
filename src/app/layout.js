import WindsurfNav from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Workforce - India's Employment Law Infrastructure",
  description:
    "Workforce executes employment law compliance for Indian companies—EPF, ESIC, Factories Act, S&E, Contract Labour—across all 36 states. Monthly compliance, registrations, and closures handled automatically. Zero penalties guaranteed.",
  alternates: { canonical: "https://www.wflimited.com/" },
  openGraph: {
    title: "Workforce - India's Employment Law Infrastructure",
    description:
      "Workforce provides full-stack compliance execution for Indian employers: EPF, ESIC, Factories Act, Shops & Establishments, and Contract Labour compliance handled automatically across all 36 states.",
    url: "https://www.wflimited.com/",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workforce - India's Employment Law Infrastructure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce - India's Employment Law Infrastructure",
    description:
      "End-to-end employment law compliance across India. EPF, ESIC, CLRA, and Factories Act handled automatically — zero penalties guaranteed.",
    images: ["https://www.wflimited.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Workforce Limited",
              url: "https://www.wflimited.com/",
              logo: "https://www.wflimited.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/workforce-limited/",
                "https://twitter.com/workforce_in",
              ],
              description:
                "Workforce Limited is India's employment law infrastructure company, executing EPF, ESIC, Factories Act, Shops & Establishments, and Contract Labour compliance across all 36 states. Zero penalties guaranteed.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Church street, Bengaluru",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-99459-33333",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </head>
      <body className={`font-main antialiased`}>
        <WindsurfNav />
        {children}
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
