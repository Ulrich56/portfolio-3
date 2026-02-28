'use client';

import { useState } from "react";
import BackgroundManager from "../app/components/BackgroundManager";
import HomeSection from "../app/components/HomeSection";
import SkillsSection from "../app/components/SkillsSection";
import ProjectsSection from "../app/components/ProjectsSection";
import ContactSection from "../app/components/ContactSection";
import Navbar from "../app/components/Navbar";

export default function Home() {


  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
