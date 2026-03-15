"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";


export default function ContactSection() {
  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Contactez-moi</h2>
        <p className="text-gray-300">
          Envoyez-moi un message pour collaborer ou échanger.
        </p>
      </div>

      <form
        action="https://formspree.io/f/xgolbonz" // remplace par ton endpoint Formspree ou EmailJS
        method="POST"
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6 shadow-lg"
      >
        {/* Email */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="mb-2 text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="px-4 py-2 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-amber-300"
          />
        </div>

        {/* Nom */}
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-2 text-sm text-gray-300">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="px-4 py-2 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-amber-300"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col text-left">
          <label htmlFor="message" className="mb-2 text-sm text-gray-300">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="px-4 py-2 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-amber-300"
          ></textarea>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold 
                     hover:bg-transparent hover:text-amber-300 hover:border-2 hover:border-amber-300 
                     hover:shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] transition"
        >
          Envoyer
        </button>
      </form>

      <div className="max-w-2xl mx-auto mt-10 flex justify-center gap-6">
          <a href="https://wa.me/2250501103521" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition">
              <FaWhatsapp className="text-white" />
               WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/ulrich-adeniyi-pineiro-10670a373/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              <CiLinkedin className="text-white" />
               LinkedIn
          </a>
          <a href="mailto:ulrich.pineiro@epitech.eu" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-800 transition">
              <PiMicrosoftOutlookLogo className="text-white" />
               Outlook
          </a>
      </div>
    </section>
  );
}
