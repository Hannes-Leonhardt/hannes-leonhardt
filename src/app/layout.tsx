'use client'; // Markiere diese Datei als Client-Komponente

import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold">
              Hannes Leonhardt
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <a href="#about" className="hover:text-gray-400">
                About Me
              </a>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </nav>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12" // X-Symbol (geschlossen)
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger (offen)
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800 text-white px-4 pb-4">
              <a
                href="#about"
                className="block py-2 hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </a>
              <a
                href="#projects"
                className="block py-2 hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto my-12 px-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Hannes Leonhardt. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}