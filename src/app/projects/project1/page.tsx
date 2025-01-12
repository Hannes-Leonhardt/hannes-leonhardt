'use client';
import Image from 'next/image';

export default function Project1Page() {
  return (
    <div className="w-full">
      {/* Titel */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Project 1
      </h1>

      {/* Inhalt */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Bild */}
        <div className="w-full relative aspect-w-16 aspect-h-9">
          <Image
            src="/images/project3.png"
            alt="Project 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Beschreibung */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About Project 3
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This project demonstrates innovative solutions in the field of technical design.
            With a focus on functionality and aesthetics, it bridges the gap between technology
            and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}