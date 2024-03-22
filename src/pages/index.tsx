import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'

import ContactModal from '@/components/ContactModal'
import HeroCard from '@/components/HeroCard'
import Loader from '@/components/Loader'
import Milestones from '@/components/Milestone'
import ProjectModal from '@/components/ProjectModal'
import ProjectPreview from '@/components/ProjectPreview'
import TextBubble from '@/components/Textbubble'
import TextMask from '@/components/TextMask'
import { DataContext, DataContextType } from '@/contexts/dataContext'
import { IntroContext, IntroContextType } from '@/contexts/introContext'
import milestoneData from '@/data/milestones'
import projectData from '@/data/projects'
import textBubbleData from '@/data/text-bubbles'
import { genGradient } from '@/utils/culler'
import { ease, milestonesContainerVariants, projectContainerVariants } from '@/utils/framer'

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

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: scrollContainerRef })

  console.log("rendering home page")
  useEffect(() => {
    if (selected || contactModalOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [selected, contactModalOpen])

  if (shouldShowIntro)
    return (
      <Loader
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

  const milestones = (
    <motion.section
      key="milestones-container"
      initial="hidden"
      animate="visible"
      variants={milestonesContainerVariants}
      exit={{ opacity: 0 }}
      className="mx-auto my-4 grid max-w-7xl  grid-cols-1 gap-4"
    >
      {milestoneData.map((milestone, idx) => (
        <Milestones key={idx} milestone={milestone} />
      ))}
    </motion.section>
  )

  return (
    <>
      <motion.section ref={scrollContainerRef} layout className="h-[300vh]">
        <motion.div className="sticky top-0  mx-auto mb-4 grid h-screen max-w-7xl grid-cols-1 items-center gap-4 lg:grid-cols-[2fr_1fr]">
          <div
            id="textbubble-container"
            className="chat chat-end flex min-h-[30rem] flex-col gap-4"
          >
            {textBubbleData.map((data, index) => (
              <TextBubble
                index={index}
                scrollYProgress={scrollYProgress}
                key={index}
              >
                {data}
              </TextBubble>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className=" z-0 h-min min-h-[30rem] rounded-3xl bg-[url('/me.jpg')] bg-cover bg-center "
          ></motion.div>
        </motion.div>
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
              key="data-source-milestones-heading"
              type="letter"
              className="text-3xl"
            >
              Milestones
            </TextMask>
          )}

          {currentDataSource === "projects" ? (
            <motion.button
              key="switch-to-milestones"
              onClick={() => setCurrentDataSource("milestones")}
              {...dataButtonProps}
            >
              Milestones
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
        {currentDataSource === "projects" ? projects : milestones}
      </AnimatePresence>
      {contactModalOpen && (
        <ContactModal setContactModalOpen={setContactModalOpen} />
      )}
    </>
  )
}

const dataButtonProps = {
  exit: { opacity: 0, x: 30, transition: { ease } },
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { ease } },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  className:
    "pointer-events-auto rounded-full text-black px-6 py-3 font-medium bg-white border hover:bg-orange-200 hover:text-white transition-colors duration-300 flex items-center justify-center gap-1 group mx-auto sm:ml-auto sm:mr-0",
}
