import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"

import ContactModal from "@/components/ContactModal"
import HeroCard from "@/components/HeroCard"
import Intro from "@/components/Intro"
import ProjectModal from "@/components/ProjectModal"
import ProjectPreview from "@/components/ProjectPreview"
import Testimonial from "@/components/Testimonial"
import TextMask from "@/components/TextMask"
import { DataContext, DataContextType } from "@/contexts/dataContext"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import projectData from "@/data/projects"
import testimonialData from "@/data/student-testimonials"
import { genGradient } from "@/utils/culler"
import {
  ease,
  projectContainerVariants,
  testimonialsContainerVariants,
} from "@/utils/framer"

const dataButtonProps = {
  exit: { opacity: 0, x: 30, transition: { ease } },
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { ease } },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  className:
    "pointer-events-auto rounded-full text-black px-6 py-3 font-medium bg-white border hover:bg-orange-200 hover:text-white transition-colors duration-300 flex items-center justify-center gap-1 group mx-auto sm:ml-auto sm:mr-0",
}

export default function Home() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  const { currentDataSource, setCurrentDataSource } = useContext(
    DataContext
  ) as DataContextType
  const [selected, setSelected] = useState<Project | null>(null)
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false)

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
    if (selected || contactModalOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [selected, contactModalOpen])

  if (shouldShowIntro)
    return (
      <Intro
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
      />
    )

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
      <AnimatePresence>
        <ProjectModal selected={selected} setSelected={setSelected} />
      </AnimatePresence>
    </motion.section>
  )

  const testimonials = (
    <motion.section
      key="testimonials-container"
      initial="hidden"
      animate="visible"
      variants={testimonialsContainerVariants}
      exit={{ opacity: 0 }}
      className="mx-auto my-4 grid max-w-7xl  grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]"
    >
      {testimonialData.map((testimonial, idx) => (
        <Testimonial key={idx} text={testimonial} />
      ))}
    </motion.section>
  )

  return (
    <>
      <motion.section
        layout
        className="mx-auto mb-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]"
      >
        <HeroCard
          contactModalOpen={contactModalOpen}
          setContactModalOpen={setContactModalOpen}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="-z-10 min-h-[30rem] rounded-3xl bg-[url('/me2.webp')]  bg-cover bg-center brightness-125 grayscale saturate-[0.8] filter transition-all duration-500 hover:rounded-lg hover:shadow-xl hover:brightness-100 hover:grayscale-0"
        ></motion.div>
      </motion.section>
      <motion.div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 rounded-3xl p-4 transition-colors duration-500 sm:flex-row">
        <AnimatePresence mode="wait">
          {currentDataSource === "projects" ? (
            <TextMask
              key="data-source-projects-heading"
              type="letter"
              className="text-3xl"
            >
              Projects
            </TextMask>
          ) : (
            <TextMask
              key="data-source-testimonials-heading"
              type="letter"
              className="text-3xl"
            >
              Testimonials
            </TextMask>
          )}

          {currentDataSource === "projects" ? (
            <motion.button
              key="switch-to-testimonials"
              onClick={() => setCurrentDataSource("testimonials")}
              {...dataButtonProps}
            >
              Testimonials
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="m-0 ml-1.5 mt-0.5 w-2.5 p-0 transition-colors duration-300 group-hover:fill-white"
              >
                <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
              </svg>
            </motion.button>
          ) : (
            <motion.button
              key="switch-to-projects"
              onClick={() => setCurrentDataSource("projects")}
              {...dataButtonProps}
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="m-0 ml-1.5 mt-0.5 w-2.5 p-0 transition-colors duration-300 group-hover:fill-white"
              >
                <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence mode="sync">
        {currentDataSource === "projects" ? projects : testimonials}
      </AnimatePresence>
      {contactModalOpen && (
        <ContactModal setContactModalOpen={setContactModalOpen} />
      )}
    </>
  )
}
