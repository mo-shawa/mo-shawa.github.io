import projectData from "@/data/projects"
import testimonialData from "@/data/student-testimonials"
import ProjectPreview from "@/components/ProjectPreview"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useContext } from "react"
import ProjectModal from "@/components/ProjectModal"
import {
  projectContainerVariants,
  testimonialsContainerVariants,
} from "@/utils/framer"
import { genGradient } from "@/utils/culler"
import HeroCard from "@/components/HeroCard"
import Loader from "@/components/Loader"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { DataContext, DataContextType } from "@/contexts/dataContext"
import { test } from "node:test"
import Testimonial from "@/components/Testimonial"

export default function Home() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  const { currentDataSource } = useContext(DataContext) as DataContextType
  const [selected, setSelected] = useState<Project | null>(null)

  const [gradients] = useState<ReturnType<typeof genGradient>[]>(() => {
    return projectData.map(() => {
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
    if (selected) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [selected])

  if (shouldShowIntro) return <Loader />

  const projects = (
    <motion.section
      key="projects-container"
      initial="hidden"
      animate="visible"
      variants={projectContainerVariants}
      exit={{ opacity: 0 }}
      className="mx-auto my-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {projectData.map((project, idx) => (
        <ProjectPreview
          selected={selected}
          setSelected={setSelected}
          key={project.name}
          {...project}
          gradient={gradients[idx]}
        />
      ))}
      <ProjectModal selected={selected} setSelected={setSelected} />
    </motion.section>
  )

  const testimonials = (
    <motion.section
      key="testimonials-container"
      initial="hidden"
      animate="visible"
      variants={testimonialsContainerVariants}
      exit={{ opacity: 0 }}
      className="mx-auto my-4 grid max-w-7xl  auto-rows-max grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]"
    >
      {testimonialData.map((testimonial) => (
        <Testimonial text={testimonial} />
      ))}
    </motion.section>
  )

  return (
    <>
      <section className="mx-auto mb-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <HeroCard />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="min-h-[30rem] rounded-3xl bg-[url('/me2.jpeg')]  bg-cover bg-center brightness-125 grayscale saturate-[0.8] filter transition-all duration-500 hover:rounded-lg hover:shadow-xl hover:brightness-100 hover:grayscale-0"
        ></motion.div>
      </section>
      <AnimatePresence mode="wait">
        {currentDataSource === "projects" ? projects : testimonials}
      </AnimatePresence>
    </>
  )
}
