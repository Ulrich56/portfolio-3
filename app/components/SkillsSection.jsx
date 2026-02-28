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
                   hover:bg-white/20 hover:border-white/50"
      >
        {icon}
      </motion.div>
    )
  }

  const renderCategory = (title, skills) => (
    <div className="w-full">
      <h4 className="text-xl font-semibold text-blue-400 mb-4">{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} index={index}/>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="flex flex-col items-center mt-20 justify-center gap-10 py-20 px-6 lg:px-24 text-white">
      <h1 className="text-3xl italic hover:text-amber-300 underline">Skillsets</h1>
      <div className="text-center mb-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg text-gray-300">
          Développeur Fullstack passionné par les interfaces immersives
        </motion.p>
        <h3 className="text-white font-medium text-2xl">
          I work with modern technologies
        </h3>
        <p className="text-gray-400 mt-2">
          My vocation is to create sites that are easy to use and attractive to my users.
        </p>
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
