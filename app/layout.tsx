import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "London Auto Doctor | Mobile Car Electrician Services",
  description:
    "Professional mobile car electrician services across London. 15+ years experience in automotive electrical repairs, diagnostics, battery replacement, and emergency services. Call 0800 123 4567",
  keywords: [
    "car electrician London",
    "mobile car electrician",
    "automotive electrical services",
    "car battery replacement",
    "car electrical repairs",
    "vehicle diagnostics",
    "emergency car electrician",
    "London car repairs",
  ],
  authors: [{ name: "London Auto Doctor" }],
  creator: "London Auto Doctor",
  publisher: "London Auto Doctor",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://londonautodoctor.com",
    title: "London Auto Doctor | Mobile Car Electrician Services",
    description:
      "Professional mobile car electrician services across London. 15+ years experience in automotive electrical repairs, diagnostics, and emergency services.",
    siteName: "London Auto Doctor",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Auto Doctor | Mobile Car Electrician Services",
    description:
      "Professional mobile car electrician services across London. 15+ years experience in automotive electrical repairs and diagnostics.",
  },
  verification: {
    google: "google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
