'use client';

import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundManager({ activeSection }) {
  const backgrounds = {
    home: null,
    skills: "/images/skills-bg.jpg",
    projects: "/images/projects-bg.jpg",
    contact: "/images/contact-bg.jpg",
  };

  const bg = backgrounds[activeSection];

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <AnimatePresence>
        {bg && (
          <motion.div
            key={bg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute inset-0 bg-black/60" /> {/* overlay sombre */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
