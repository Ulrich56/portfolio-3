'use client'

import { Backend_skill, Frontend_skill, Full_stack, Tools } from "@/data/skills";
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const SkillItem = ({ icon, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }

    const delay = 0.15

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ duration: 0.6, delay: index * delay }}
        className="flex items-center justify-center p-6 rounded-xl 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   transition-transform duration-300 hover:scale-110 
                   hover:bg-linear-to-bl from-gray-800 via-black/25 to-gray-800 hover:border-white/50"
      >
        {icon}
      </motion.div>
    )
  }

  const renderCategory = (title, skills) => (
    <div className="w-full">
      <h4 className="text-xl font-semibold text-blue-400 mb-4 font-serif">{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} index={index}/>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="flex flex-col items-center mt-30 justify-center gap-10 py-20 px-6 lg:px-24 text-white">
      <h1 className="text-3xl italic hover:text-amber-300 font-serif underline">Skillsets</h1>
      <div className="text-center mb-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg font-serif text-gray-400 ">
          Développeur Fullstack passionné par les interfaces immersives, je travaille avec des technologies modernes pour concevoir des sites à la fois attractifs et faciles à utiliser. Ma vocation est de transformer chaque projet en une expérience intuitive et engageante pour mes utilisateurs.
        </motion.p>
      </div>

      <div className="space-y-12 w-full max-w-5xl">
        {renderCategory("Backend", Backend_skill)}
        {renderCategory("Frontend", Frontend_skill)}
        {renderCategory("Full Stack", Full_stack)}
        {renderCategory("Tools", Tools)}
      </div>
    </section>
  )
}
