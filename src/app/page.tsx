'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          As a passionate design enthusiast currently in my 5th semester of studying Technical Design, I am dedicated to crafting projects that balance functionality and simplicity. My pragmatic approach focuses on innovative solutions where every detail serves a purpose. I thrive in collaborative environments, exchanging ideas and working with determination to see projects through to successful completion.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Image 1 */}
          <a href="/projects/project1" className="group">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/images/project1.png"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-gray-700 font-semibold">dyson handmixer</p>
          </a>
          {/* Image 2 */}
          <a href="/projects/project2" className="group">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/images/project2.png"
                alt="Project 2"
                fill
                className="object-cover"
                style={{ objectPosition: '10% 100%' }} // Verschiebe das Bild manuell
              />
            </div>
            <p className="mt-2 text-gray-700 font-semibold">walker</p>
          </a>
          {/* Image 3 */}
          <a href="/projects/project3" className="group">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/images/project3.png"
                alt="Project 3"
                fill
                className="object-cover"
                style={{ objectPosition: '80% 50%' }} // Verschiebe das Bild manuell
              />
            </div>
            <p className="mt-2 text-gray-700 font-semibold">sustainable bikeframe</p>
          </a>
          {/* Image 4 */}
          <a href="/projects/project4" className="group">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/images/project4.jpg"
                alt="Project 4"
                fill
                className="object-cover"
                style={{ objectPosition: '30% 10%' }} // Verschiebe das Bild manuell
              />
            </div>
            <p className="mt-2 text-gray-700 font-semibold">sculpture</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center mt-16 px-4">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          {/* E-Mail */}
          <div>
            <p className="text-lg font-semibold text-gray-800">E-Mail:</p>
            <a
              href="mailto:placeholder@example.com"
              className="text-blue-500 hover:underline"
            >
              placeholder@example.com
            </a>
          </div>
          {/* Telefon */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Phone:</p>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +123 456 7890
            </a>
          </div>
          {/* Behance */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Behance:</p>
            <a
              href="https://www.behance.net/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              behance.net/placeholder
            </a>
          </div>
          {/* Instagram */}
          <div>
            <p className="text-lg font-semibold text-gray-800">Instagram:</p>
            <a
              href="https://www.instagram.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              instagram.com/placeholder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}