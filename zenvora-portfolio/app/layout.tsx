import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";



export const metadata: Metadata = {
  metadataBase: new URL("https://zenvora.vercel.app"),

  title: {
    default: "Zenvora Technologies",
    template: "%s | Zenvora Technologies",
  },

  description:
    "Empowering Businesses Through Technology & Innovation. Zenvora Technologies provides web development, AI solutions, recruitment services, digital marketing, and workforce transformation.",

  keywords: [
    "Zenvora Technologies",
    "Web Development",
    "Software Development",
    "AI Solutions",
    "Recruitment Services",
    "Digital Marketing",
    "Technology Company India",
  ],

  authors: [
    {
      name: "Prince Sharma",
    },
  ],

  creator: "Prince Sharma",

  openGraph: {
    title: "Zenvora Technologies",
    description:
      "Empowering Businesses Through Technology & Innovation.",

    url: "https://zenvora.vercel.app",

    siteName: "Zenvora Technologies",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Zenvora Technologies",

    description:
      "Empowering Businesses Through Technology & Innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}