import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold font-serif italic text-white">Ulrich.P</h1>

        {/* Bouton burger visible en mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icône burger simple */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="uppercase tracking-wider hover:text-yellow-400 transition"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md px-6 py-4 space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block uppercase text-center tracking-wider text-white hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)} // ferme le menu après clic
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
