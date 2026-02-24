'use client';

import { FaChevronRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <div className="">
        <div className="space-y-6 flex flex-row justify-between items-center sm:gap-8">
            <div>
                <img src="favicon.ico" alt="Favicon" className="bg-amber-200 rounded-full"/>
            </div>

            <div className="space-y-6 font-serif md:text-right ">
                <div className="h-screen flex flex-col items-center justify-center text-white">
                    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold font-serif italic" >
                        Salut, je suis Ulrich Pineiro Adeniyi Nanouga
                    </motion.h1>
                    <p className="text-xl text-amber-300 mt-6">Fullstack Developer • UI/UX Designer</p>
                    <button className="flex items-center mt-6 gap-2 px-4 py-3 hover:animate-bounce hover:mt-8 bg-blue-500 rounded-lg hover:bg-transparent hover:border-2 hover:border-amber-300 hover:shadow-[0_0_15px_3px_rgba(255,215,0,0.8)] hover:text-amber-300 transition">
                        Découvrir mes projets <FaChevronRight />
                    </button>
                </div>
                
            </div>
        </div>

        <div className=" mt-20  text-center flex flex-col items-center gap-4">
            <h1 className="text-3xl italic hover:text-amber-300 underline"> About me</h1>
            <TypeAnimation
                sequence={[
                    "Je suis PINEIRO Ulrich A.N, developpeur fullstack junior d'applications web et mobile. J'ai une solide formation en développement web et mobile, avec une expertise en technologies front-end et back-end. Je suis passionne par la technologie et tout ce qui l'entoure je suis donc en plus de ma formation en developpement fullstack etudiant en licence de Reseau et Securite Informatique. Je suis quelqu'un qui est beaucoup attirer par le design et la beaute des choses, je fournis donc un grand effort pour fournir a mes utilisateurs des sites performants avec des designs attirant et facile a utiliser en fesant passer leur comfort avant tout. Je suis curieux, autonome, rigoureux, je sais rechercher, travailler en equipe.",
                ]}
                speed={150}
                style={{ fontSize: "1.1em", color: "#E0E0E0", fontFamily: "serif", fontStyle: "italic" }}
                
            />
        </div>
    </div>

    
  );
}
