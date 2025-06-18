import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "SnowBrain Ai v3",
    template: "%s | Snowdev NextJs Template",
  },
  description: "",
  keywords: ["snowdev", "template"],
  authors: [{ name: "Dimitri Tedom", url: "https://github.com/DimitriTedom" }],
  metadataBase: new URL("https://snow-dev-portfolio-mu.vercel.app/"),
  openGraph: {
    title: "Snowdev NextJs Template",
    description: "",
    url: "https://snow-dev-portfolio-mu.vercel.app/",
    siteName: "Snowdev NextJs Template",
    images: [
      {
        url: "https://snow-prompt-builder.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snowdev NextJs Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DimitriTedom",
    creator: "@DimitriTedom",
    title: "Snowdev NextJs Template",
    description: "",
    images: ["https://snow-dev-portfolio-mu.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-nexa text-prima`}>
          <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
            <NuqsAdapter>{children}</NuqsAdapter>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
