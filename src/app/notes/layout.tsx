import NavBar from "./NavBar";
import type { Metadata } from "next"; // Import Metadata type if needed

export const metadata: Metadata = {
  title: 'Syncade',
  description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
  openGraph: {
    title: 'Syncade',
    description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
    images: ['/opengraph-image.png'],
    url: 'https://www.syncade.io/',
    type: 'website',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.s.pro' : 'http://localhost:3000'),
  // Additional metadata options
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
