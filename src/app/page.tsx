'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm Hannes Leonhardt. I study Technical Design and work at the intersection
          of technology and creativity. I love designing innovative solutions and building
          things that inspire people.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="flex justify-center space-x-8">
          {/* Image 1 */}
          <a href="/projects/project1" className="group">
            <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/images/project3.png"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
          <p className="mt-2 text-gray-700 font-semibold">Project 1</p>
        </a>
        {/* Image 2 */}
        <a href="/projects/project2" className="group">
          <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
            <Image
              src="/images/project1.png"
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-gray-700 font-semibold">Project 2</p>
        </a>
        {/* Image 3 */}
        <a href="/projects/project3" className="group">
          <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
            <Image
              src="/images/project1.png"
              alt="Project 3"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-gray-700 font-semibold">Project 3</p>
        </a>
        {/* Image 4 */}
        <a href="/projects/project4" className="group">
          <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
            <Image
              src="/images/project1.png"
              alt="Project 4"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-gray-700 font-semibold">Project 4</p>
        </a>
    </div>
      </section >
    </div >
  );
}