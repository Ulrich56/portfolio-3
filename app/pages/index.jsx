'use client';
import { useState } from "react";
import BackgroundManager from "../components/BackgroundManager";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative min-h-screen">
      <BackgroundManager activeSection={activeSection} />

      <nav className="flex gap-6 p-6">
        {["home", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className="uppercase tracking-wider hover:text-blue-400 transition"
          >
            {section}
          </button>
        ))}
      </nav>

      <main className="p-12">
        {activeSection === "home" && <h1 className="text-4xl">Bienvenue</h1>}
        {activeSection === "skills" && <h1 className="text-4xl">Compétences</h1>}
        {activeSection === "projects" && <h1 className="text-4xl">Projets</h1>}
        {activeSection === "contact" && <h1 className="text-4xl">Contact</h1>}
      </main>
    </div>
  );
}
