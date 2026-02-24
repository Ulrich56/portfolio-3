'use client';

import { useState } from "react";
import BackgroundManager from "../app/components/BackgroundManager";
import HomeSection from "../app/components/HomeSection";
import SkillsSection from "../app/components/SkillsSection";
import ProjectsSection from "../app/components/ProjectsSection";
import ContactSection from "../app/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative min-h-screen">
      <BackgroundManager activeSection={activeSection} />

      <nav className="flex gap-6 p-6">
        {["home", "skills", "projects", "contact"].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className="uppercase tracking-wider hover:text-amber-300 hover:border-2 hover:rounded-xl md:w-full hover:shadow-[0_0_15px_3px_rgba(255,215,0,0.8)] transition"
          >
            {section}
          </button>
        ))}
      </nav>

      <main className="p-12">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>
    </div>
  );
}
