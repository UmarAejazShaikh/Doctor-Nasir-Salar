import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drsalarspine.com"),
  title: {
    default: "MIS & Endoscopic Spine Surgery in Ahmedabad | Dr. Nasir Salar",
    template: "%s | Dr. Nasir Salar",
  },
  description:
    "Profile of Dr. Nasir Salar (MBBS, MS Orthopedics, Spine Fellowship), Orthopedic and Spine Surgeon in Sarkhej-Juhapura, Ahmedabad, with a clinical focus on MIS Spine Surgery, Endoscopic Spine Surgery, sciatica and slip disc care.",
  keywords: [
    "MIS Spine Surgery",
    "MIS Spine Surgery Ahmedabad",
    "Minimally Invasive Spine Surgery Ahmedabad",
    "Endoscopic Spine Surgery",
    "Endoscopic Spine Surgery Ahmedabad",
    "Spine Surgeon Ahmedabad",
    "Sciatica Treatment Ahmedabad",
    "Slip Disc Treatment Ahmedabad",
    "Joint replacement surgeon Sarkhej",
    "Orthopedic doctor near me Sarkhej",
    "Dr Nasir Salar",
  ],
  authors: [{ name: "Dr. Nasir Salar" }],
  creator: "Dr. Nasir Salar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "https://drsalarspine.com",
    title: "MIS & Endoscopic Spine Surgery in Ahmedabad | Dr. Nasir Salar",
    description:
      "Learn about Dr. Nasir Salar's orthopedic and spine profile, including MIS Spine Surgery and Endoscopic Spine Surgery in Ahmedabad.",
    siteName: "Dr. Nasir Salar",
    images: [
      {
        url: "/images/dr-nasir-salar.jpg",
        width: 900,
        height: 1097,
        alt: "Dr. Nasir Salar, Orthopedic and Spine Surgeon in Ahmedabad",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white selection:bg-sky-500 selection:text-white`}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
