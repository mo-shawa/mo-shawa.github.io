import { motion } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import GithubSVG from "../../public/github.svg"
import Pill from "./Pill"
import CullerCard from "./CullerCard"
import { ease, techPillContainerVariants } from "@/utils/framer"

type Props = {
  selected: Project | null
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>
}

export default function ProjectModal({ selected, setSelected }: Props) {
  if (!selected) return <></>

  return (
    <motion.div
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        onClick={() => setSelected(null)}
        className="absolute inset-0 bg-black/20 filter backdrop-blur-md"
      ></motion.div>
      <motion.div
        layoutId={`card-${selected.name}`}
        onClick={(e) => e.stopPropagation()}
        transition={{
          duration: 0.5,
          ease,
        }}
      >
        <div className="relative h-full max-h-screen max-w-3xl rounded-3xl bg-white bg-center bg-no-repeat lg:bg-scroll">
          <div className="flex flex-col gap-4 rounded-t-lg px-10 py-6">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              className="absolute right-6 top-5 h-8 w-8 cursor-pointer rounded-full bg-white stroke-red-700 p-0.5 shadow transition-all duration-300 hover:bg-red-700 hover:stroke-white hover:shadow-lg"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </motion.svg>

            <motion.p
              className="justify-self-start text-sm font-light text-gray-500"
              layoutId={`year-${selected.name}`}
            >
              {selected.year}
            </motion.p>
            <motion.h2
              layoutId={`title-${selected.name}`}
              className="text-3xl font-medium"
            >
              {selected.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-light"
            >
              {selected.description}
            </motion.p>
          </div>
          <motion.div layoutId={`image-${selected.name}`}>
            {selected.image !== "culler" && (
              <Image
                className="aspect-video w-auto"
                src={selected.image}
                alt={selected.name}
                width={1920}
                height={1080}
                quality={100}
              />
            )}
            {selected.image === "culler" && <CullerCard />}
          </motion.div>
          <motion.div
            layoutId={`socials-${selected.name}`}
            className="z-20 flex w-full flex-row  items-center justify-end gap-4 rounded-b-3xl rounded-tl-3xl p-6"
          >
            <motion.div
              className="flex h-full flex-row flex-wrap items-center justify-start gap-2 sm:gap-4"
              initial="hidden"
              animate="visible"
              variants={techPillContainerVariants}
            >
              {selected.technologies.map((tech) => (
                <Pill>{tech}</Pill>
              ))}
            </motion.div>
            <motion.div className="flex flex-wrap justify-end gap-2 sm:gap-4">
              <motion.div layoutId={`github-${selected.name}`}>
                <SocialButton
                  isProject
                  href={selected.github}
                  hoverColor="github"
                >
                  <GithubSVG />
                </SocialButton>
              </motion.div>
              <motion.div layoutId={`deployment-${selected.name}`}>
                <SocialButton
                  isProject
                  hoverColor="github"
                  href={selected.deployment}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
