"use client"

export default function ProjectsSection() {
  const projects = [
    { title: "Portfolio Next.js", desc: "Site immersif avec Tailwind & Framer Motion" },
    { title: "App Mobile Vue.js", desc: "Application responsive avec animations" },
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-lg shadow-lg transition hover:shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]"
          >
            <h3 className="text-xl font-semibold text-gray-400">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


