export default function ContactSection() {
  return (
    <section className="py-20 bg-black text-white text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
      <p className="mb-6">Envoyez-moi un message pour collaborer ou échanger.</p>
      <a
        href="mailto:ulrich.pineiro@epitech.eu"
        className="px-6 py-3 bg-yellow-500 hover:shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] text-black rounded-lg font-semibold hover:bg-black hover:text-amber-300 hover:border-2 hover:border-amber-300 transition"
      >
        Écrire un email
      </a>
    </section>
  )
}

