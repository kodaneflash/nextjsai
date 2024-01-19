import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Syncade',
  description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
  openGraph: {
    title: 'Syncade',
    description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
    images: ['/opengraph-image.png'], // Ensure this is the correct path in the public directory
    type: 'website',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.s.pro' : 'http://localhost:3000'),
  // Additional metadata options
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}