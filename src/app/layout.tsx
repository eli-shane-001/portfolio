import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { personal } from "@/data/content";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://eli-shane-001.github.io/portfolio/";
const title = `${personal.name} — NetSuite Developer`;
const description =
  "NetSuite developer with 5 years across SuiteScript 2.1, integrations (SAP, OpenAir, SFTP) and ZATCA e-invoicing compliance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${personal.name}`,
  },
  description,
  keywords: [
    "NetSuite",
    "SuiteScript",
    "SuiteScript 2.1",
    "Map/Reduce",
    "RESTlet",
    "SuiteTalk",
    "OAuth 2.0",
    "ZATCA",
    "SAP integration",
    "OpenAir",
    "NetSuite developer India",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: personal.name,
    title,
    description,
    images: [
      {
        url: "og.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} — NetSuite Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og.png"],
  },
};

// City/region only — no street address, no phone.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "NetSuite Developer",
  url: siteUrl,
  sameAs: [personal.linkedin, personal.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malegaon",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "NetSuite",
    "SuiteScript",
    "SAP integration",
    "OpenAir integration",
    "ZATCA e-invoicing",
  ],
};

// Runs before paint so the stored theme never flashes the wrong palette.
const themeScript = `try{var t=localStorage.getItem("theme");var d=t==="dark"||((!t||t==="system")&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${newsreader.variable} ${archivo.variable}`}>
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
