import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Gaziantep Altınşiş Kebapcısı Eindhoven | Authentieke Turkse Kebap",
  description: "Authentieke Gaziantep kebap van de houtskoolgrill aan de Kruisstraat in Eindhoven. Bestel online, haal af of kom eten bij Altınşiş.",
  keywords: "Turks restaurant Eindhoven, kebab Eindhoven, Gaziantep kebap, Altınşiş Eindhoven, Adana kebab Eindhoven, halal Turks eten Eindhoven, restaurant Kruisstraat Eindhoven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Gaziantep Altınşiş Kebapcısı",
    "image": "https://www.altinsis.nl/images/hero-grill.jpg",
    "url": "https://www.altinsis.nl/",
    "telephone": "+31402989886",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kruisstraat 62",
      "addressLocality": "Eindhoven",
      "postalCode": "5612 CJ",
      "addressCountry": "NL"
    },
    "servesCuisine": "Turkish",
    "priceRange": "€20-€30",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.1",
      "reviewCount": "757"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Thursday"],
        "opens": "14:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:59"
      }
    ]
  };

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}