"use client"
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsSection() {
  const projects = [
    { 
      title: "Institut Giovanni Biffi", 
      desc: "Refonte du site internet de l'institut Giovanni Biffi avec Wordpress pour une expérience utilisateur moderne et fluide.", 
      link: "https://institut-giovannibiffi.com/" 
    },
    { 
      title: "Rotten Tomatoes Clone", 
      desc: "Plateforme de découverte et de notation cinématographique avec Next.js, TMDB API et MongoDB.", 
      link: "https://rotten-tomatoes-1.onrender.com" 
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3, // déclenche quand 30% de la section est visible
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      id="projects"
      animate={{
        background: inView 
          ? "linear-gradient(to bottom left, #1f2937, rgba(0,0,0,0.5), #1f2937)" 
          : "#000000"
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="py-20"
    >
      <h2 className="text-3xl italic hover:text-amber-300 font-serif underline text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                       shadow-lg transition hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.6)] 
                       hover:scale-105 duration-300"
          >
            {/* Icône lien en haut à droite */}
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
            >
              <LuSquareArrowOutUpRight className="text-white w-5 h-5 hover:text-sky-400" />
            </a>

            {/* Titre et description */}
            <h3 className="text-xl font-semibold italic font-serif text-blue-300">{p.title}</h3>
            <p className="text-gray-300 mt-3">{p.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
