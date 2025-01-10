import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        {/* Navigation */}
        <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-xl font-bold">Hannes Leonhardt - Portfolio</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="/projects" className="hover:text-yellow-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#models" className="hover:text-yellow-300">
                    Models
                  </a>
                </li>
                <li>
                  <a href="#work-experience" className="hover:text-yellow-300">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-4">
          <p>© 2025 Hannes Leonhardt. Alle Rechte vorbehalten.</p>
        </footer>
      </body>
    </html>
  );
}