import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranjal Soni – Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Pranjal Soni – Computer Science and Engineering student interested in Full Stack Development, Backend Systems, and DevOps. BTech CSE student at Lovely Professional University.",
  keywords: [
    "Pranjal Soni",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "LPU",
    "Competitive Programmer",
  ],
  authors: [{ name: "Pranjal Soni" }],
  creator: "Pranjal Soni",
  openGraph: {
    type: "website",
    title: "Pranjal Soni – Software Engineer",
    description:
      "Developer portfolio showcasing projects, skills, certificates, and education.",
    siteName: "Pranjal Soni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranjal Soni – Software Engineer",
    description: "Developer portfolio with projects, skills, certificates, and education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased dark">{children}<Analytics />
          <SpeedInsights />

      </body>

    </html>
  );
}
