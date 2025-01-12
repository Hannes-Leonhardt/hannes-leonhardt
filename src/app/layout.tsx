import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Hannes Leonhardt
            </a>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#about" className="hover:text-gray-400">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto my-12">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Hannes Leonhardt. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}