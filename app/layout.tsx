import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import { ThemeProvider, themeScript } from "@/components/ThemeProvider";
import { MotionProvider } from "@/components/motion";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevin Prieto - Software Engineer",
    template: "%s | Kevin Prieto",
  },
  description: "Software engineer focused on backend systems, web applications, and automation. Building high-quality digital experiences.",
  keywords: ["Software Engineer", "Backend", "Frontend", "Full Stack", "System Design", "Kevin Prieto"],
  authors: [{ name: "Kevin Prieto", url: "https://kevprieto.com" }],
  creator: "Kevin Prieto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevprieto.com",
    title: "Kevin Prieto - Software Engineer",
    description: "Software engineer focused on backend systems, web applications, and automation. Building high-quality digital experiences.",
    siteName: "Kevin Prieto",
    images: [
      {
        url: "/og-image.png", // We should ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Kevin Prieto - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Prieto - Software Engineer",
    description: "Software engineer focused on backend systems, web applications, and automation.",
    creator: "@bykevin12",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://kevprieto.com"),
};

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider>
          <MotionProvider>
            <ClientLayout>{children}</ClientLayout>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
