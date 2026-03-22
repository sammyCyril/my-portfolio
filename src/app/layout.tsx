import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samuel Aigbefo | Full Stack Developer",

  description:
    "Full Stack Developer specializing in Next.js, TypeScript, Node.js, and MongoDB. Explore my portfolio, projects, and technical skills.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Samuel Aigbefo" }],

  openGraph: {
    title: "Samuel Aigbefo | Full Stack Developer",
    description:
      "Explore my portfolio featuring modern web applications built with Next.js, TypeScript, and MongoDB.",
    url: "https://your-domain.com", // update later
    siteName: "Samuel Portfolio",
    type: "website",
    images: [
      {
        url: "/projects/og-image.png", 
        width: 1200,
        height: 508,
        alt: "Samuel Aigbefo Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}