import { motion } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import GithubSVG from "../../public/github.svg"
import { useRef, useState } from "react"
import { Coordinates, handleCullerCardMouseMove } from "@/utils/culler"

type Props = {
  selected: Project | null
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>
}

export default function ProjectModal({ selected, setSelected }: Props) {
  const cullerRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState<Coordinates>({
    x: 0,
    y: 0,
  })

  if (!selected) return <></>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll px-4"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        layoutId={`card-${selected.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full max-w-6xl rounded-3xl bg-white bg-contain bg-fixed bg-center bg-no-repeat lg:bg-scroll">
          <div className="rounded-t-lg px-10 py-6 ">
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
              className=" "
            >
              {selected.description}
            </motion.p>
          </div>
          <motion.div>
            {selected.image !== "culler" && (
              <Image
                className="aspect-video  w-full"
                src={selected.image}
                alt={selected.name}
                width={1920}
                height={1080}
              />
            )}
            {selected.image === "culler" && (
              <div
                ref={cullerRef}
                className="aspect-video h-full w-full transition-colors duration-500"
                onMouseMove={(e) =>
                  handleCullerCardMouseMove(e, cullerRef, cursor, setCursor)
                }
              ></div>
            )}
          </motion.div>
          <motion.div
            layoutId={`socials-${selected.name}`}
            className="flex flex-row justify-end gap-4  rounded-tl-3xl p-6 shadow"
          >
            <motion.div layoutId={`github-${selected.name}`}>
              <SocialButton href={selected.github} hoverColor="github">
                <GithubSVG />
              </SocialButton>
            </motion.div>
            <motion.div layoutId={`deployment-${selected.name}`}>
              <SocialButton hoverColor="github" href={selected.deployment}>
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
        </div>
      </motion.div>
    </motion.div>
  )
}
