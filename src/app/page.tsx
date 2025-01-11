export default function Home() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
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
            <div className="w-60 h-80 rounded-lg bg-gray-300 shadow-lg transition-transform transform group-hover:scale-105"></div>
            <p className="mt-2 text-gray-700 font-semibold">Project 1</p>
          </a>
          {/* Image 2 */}
          <a href="/projects/project2" className="group">
            <div className="w-60 h-80 rounded-lg bg-gray-300 shadow-lg transition-transform transform group-hover:scale-105"></div>
            <p className="mt-2 text-gray-700 font-semibold">Project 2</p>
          </a>
          {/* Image 3 */}
          <a href="/projects/project3" className="group">
            <div className="w-60 h-80 rounded-lg bg-gray-300 shadow-lg transition-transform transform group-hover:scale-105"></div>
            <p className="mt-2 text-gray-700 font-semibold">Project 3</p>
          </a>
          {/* Image 4 */}
          <a href="/projects/project4" className="group">
            <div className="w-60 h-80 rounded-lg bg-gray-300 shadow-lg transition-transform transform group-hover:scale-105"></div>
            <p className="mt-2 text-gray-700 font-semibold">Project 4</p>
          </a>
        </div>
      </section>
    </div>
  );
}