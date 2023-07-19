import { Plus_Jakarta_Sans } from "next/font/google"
import projects from "@/data/projects"
import ProjectPreview from "@/components/ProjectPreview"
import { AnimatePresence, LayoutGroup, motion, useAnimate } from "framer-motion"
import { useEffect, useState, useContext } from "react"
import ProjectModal from "@/components/ProjectModal"
import { projectContainerVariants } from "@/utils/framer"
import { genGradient } from "@/utils/culler"
import HeroCard from "@/components/HeroCard"
import Loader from "@/components/Loader"
import { IntroContext, IntroContextType } from "@/contexts/introContext"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType

  const [selected, setSelected] = useState<Project | null>(null)

  const [gradients] = useState<ReturnType<typeof genGradient>[]>(() => {
    return projects.map(() => {
      return genGradient({
        direction: "to bottom right",
        type: "rgb",
        minB: 242,
        minG: 242,
        minR: 242,
      })
    })
  })

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [selected])

  if (shouldShowIntro) {
    return <Loader />
  }

  return (
    <main className={`mx-4 ${plusJakartaSans.className} pt-16`}>
      <section className="  mx-auto mb-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <HeroCard />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="min-h-[30rem] rounded-3xl bg-[url('/me2.jpeg')]  bg-cover bg-center brightness-125 grayscale saturate-[0.8] filter transition-all duration-500 hover:rounded-lg hover:shadow-xl hover:brightness-100 hover:grayscale-0"
        ></motion.div>
      </section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={projectContainerVariants}
        className="mx-auto my-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2"
      >
        {projects.map((project, idx) => (
          <ProjectPreview
            selected={selected}
            setSelected={setSelected}
            key={project.name}
            {...project}
            gradient={gradients[idx]}
          />
        ))}
        <AnimatePresence>
          <ProjectModal selected={selected} setSelected={setSelected} />
        </AnimatePresence>
      </motion.section>
    </main>
  )
}
