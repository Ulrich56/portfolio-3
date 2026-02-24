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
    

    const delay = 0.3

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ duration: 0.6, delay: index * delay }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    )
  }
  
  return (
    <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-15 lg:pb-80">
    <div>
      
      <section className="h-screen flex flex-col items-center justify-center bg-linear-to-b from-black to-gray-900 text-white">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg text-gray-300" >
        Développeur Fullstack passionné par les interfaces immersives
      </motion.p>
    </section>

      <div className="flex justify-center mb-2">
        <h3 className="text-white font-medium cursive text-2xl">
          I work with modern technologies
        </h3>
      </div>

      <div className="flex justify-center">
        <p className="text-gray-400 font-serif">
          My vocation is to create sites that are easy to use and attractive to my users.
        </p>
      </div>

      <section
        id="skills"
        className='mb-10 flex flex-col items-center p-6 md:p-12 lg:p-24 w-3xl mx-auto rounded-xl text-white px-4 py-4 transition gap-3 '
        style={{ transform: "scale(0.9)" }}
      >
        {/* Backend */}
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center relative z-10">
          {Backend_skill.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} index={index} />
          ))}
        </div>

        {/* Frontend */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
          {Frontend_skill.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} index={index} />
          ))}
        </div>

        {/* Full stack */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
          {Full_stack.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} index={index} />
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
          {Tools.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} index={index} />
          ))}
        </div>
      </section>
    </div>
    </section>
    
  );
}

