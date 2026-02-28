// components/NavBar.jsx
export default function NavBar() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="flex gap-8 justify-between">
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
    </nav>
  );
}
