import { AnimatePresence, motion, useScroll } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"

import ContactModal from "@/components/ContactModal"
import Loader from "@/components/Loader"
import Projects from "@/components/Projects"
import TextBubbles from "@/components/TextBubbles"
import TextMask from "@/components/TextMask"
import Timeline from "@/components/Timeline"
import { DataContext, DataContextType } from "@/contexts/dataContext"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { ease } from "@/utils/framer"

export default function Home() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  const { currentDataSource, setCurrentDataSource } = useContext(
    DataContext
  ) as DataContextType
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<Project | null>(null)

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

  return (
    <>
      <motion.section
        ref={scrollContainerRef}
        className="h-[300vh] overflow-x-clip bg-gradient-to-b from-pink-100 via-violet-100 to-white  px-4"
      >
        <motion.div className="sticky top-0  mx-auto mb-4 grid h-screen max-w-7xl grid-cols-1 items-center gap-4 md:grid-cols-[2fr_1fr]">
          <TextBubbles scrollYProgress={scrollYProgress} />
          <motion.div
            initial={{
              x: 10,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { ease, duration: 1 },
            }}
            className="z-0 hidden h-min min-h-[30rem] rounded-3xl bg-[url('/me.jpg')] bg-cover bg-center md:block "
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
      <AnimatePresence mode="wait">
        {currentDataSource === "projects" ? (
          <Projects selected={selected} setSelected={setSelected} />
        ) : (
          <Timeline />
        )}
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
