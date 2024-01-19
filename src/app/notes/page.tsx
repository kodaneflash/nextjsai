import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syncade - Notes",
  description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
  openGraph: {
    title: 'Syncade',
    description: 'Get a Second Brain with Syncade, an intelligent note-taking app powered by AI',
    images: ['/opengraph-image.png'], // Ensure this is the correct path in the public directory
    type: 'website',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.syncade.pro' : 'http://localhost:3000'),
  // Additional metadata options
};

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes yet. Why don't you create one?"}
        </div>
      )}
    </div>
  );
}
