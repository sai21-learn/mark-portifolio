import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Mark Zuckerberg - Portfolio",
  description: "Founder of Facebook and Meta. Building the future of human connection and the metaverse.",
  keywords: ["Mark Zuckerberg", "Meta", "Facebook", "Metaverse", "VR", "AR", "AI"],
  authors: [{ name: "Mark Zuckerberg" }],
  openGraph: {
    title: "Mark Zuckerberg - Portfolio",
    description: "Founder of Facebook and Meta. Building the future of human connection and the metaverse.",
    url: "https://markzuckerberg.com",
    siteName: "Mark Zuckerberg Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mark Zuckerberg Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Zuckerberg - Portfolio",
    description: "Founder of Facebook and Meta. Building the future of human connection and the metaverse.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
