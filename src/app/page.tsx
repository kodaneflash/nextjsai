import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Syncade',
  description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
  openGraph: {
    title: 'Syncade',
    description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
    images: ['/opengraph-image.png'], // Ensure this is the correct path in the public directory
    type: 'website',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.syncade.io' : 'http://localhost:3000'),
  // Additional metadata options
};

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Syncade logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Syncade
        </span>
      </div>
      <h2 className="max-w-prose text-center">
      Get a Second Brain with Syncade, an intelligent note-taking app powered by AI.
      </h2>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}