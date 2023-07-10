import { Plus_Jakarta_Sans } from "next/font/google"
import SocialButton from "@/components/SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import projects from "@/data/projects"
import ProjectPreview from "@/components/ProjectPreview"
import { motion } from "framer-motion"
import TextMask from "@/components/TextMask"
import Poppers from "@/components/Poppers"
import { useEffect, useState } from "react"
import ProjectModal from "@/components/ProjectModal"
import { projectContainerVariants } from "@/utils/framer"
import { genGradient } from "@/utils/culler"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
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

  return (
    <main className={`mx-4 ${plusJakartaSans.className}`}>
      <section className="  mx-auto mb-4 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="relative flex min-h-[30rem] flex-col gap-16 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10 ">
          <Poppers />
          <TextMask className="pointer-events-none text-4xl font-semibold leading-snug tracking-tight">
            Hello, I'm Mahmoud. I'm a Frontend-Focused Fullstack Developer.
          </TextMask>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pointer-events-none z-10 flex-1 text-lg"
          >
            I have a passion for learning new things, and love seeing ideas come
            to life. Most recently, I worked on{" "}
            <a
              href="https://bountree.app"
              className="pointer-events-auto text-blue-500 hover:underline"
              target="_blank"
            >
              Bountree
            </a>
            . Before that, I was an{" "}
            <a
              target="_blank"
              className="pointer-events-auto text-blue-500 hover:underline"
              href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
            >
              Instructional Associate
            </a>{" "}
            at General Assembly.
          </motion.p>

          <motion.div className="pointer-events-none relative flex flex-col items-center gap-4 justify-self-end lg:flex-row">
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: [0.6, 0.01, 0.05, 0.95],
                },
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  ease: [0.6, 0.01, 0.05, 0.95],
                },
              }}
              className="pointer-events-auto rounded-full bg-black px-12 py-3 font-medium text-white"
            >
              Contact me
            </motion.button>
            <motion.div className="pointer-events-auto flex items-center gap-4">
              <SocialButton
                bgColor="white"
                hoverColor="github"
                href="https://github.com/mo-shawa"
              >
                <GithubSVG className="h-5 w-5" />
              </SocialButton>
              <SocialButton
                bgColor="white"
                hoverColor=""
                href="https://linkedin.com/in/mo-shawa"
              >
                <LinkedInSVG />
              </SocialButton>
              <SocialButton
                bgColor="white"
                hoverColor=""
                href="https://twitter.com/shawa_dev"
              >
                <TwitterSVG />
              </SocialButton>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="h-[30rem] rounded-3xl bg-[url('/me2.jpeg')]  bg-cover bg-center brightness-125 grayscale saturate-[0.8] filter transition-all duration-500 hover:rounded-lg hover:shadow-xl hover:brightness-100 hover:grayscale-0"
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
            setSelected={setSelected}
            key={project.name}
            {...project}
            gradient={gradients[idx]}
          />
        ))}
      </motion.section>
      <ProjectModal selected={selected} setSelected={setSelected} />
    </main>
  )
}
