import GithubSVG from "../../public/github.svg"
import { motion } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import { projectPreviewVariants } from "@/utils/framer"
import { genGradient } from "@/utils/culler"
import CullerCard from "./CullerCard"
import { useRef } from "react"

type ProjectPreviewProps = Project & {
  selected: Project | null
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>
  gradient: ReturnType<typeof genGradient>
}

export default function ProjectPreview({
  name,
  description,
  github,
  deployment,
  image,
  technologies,
  gradient,
  year,
  setSelected,
}: ProjectPreviewProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick() {
    setSelected({
      name,
      description,
      github,
      deployment,
      image,
      technologies,
      year,
    })
  }
  return (
    <motion.div
      ref={ref}
      layoutId={`card-${name}`}
      id={name}
      onClick={handleOnClick}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className={`transform cursor-pointer overflow-hidden rounded-3xl`}
      variants={projectPreviewVariants}
    >
      <div className="relative h-full w-full bg-contain bg-fixed bg-center bg-no-repeat">
        <div
          className="rounded-t-lg px-10 py-6"
          style={{ background: gradient }}
        >
          <motion.p
            layoutId={`year-${name}`}
            layout="position"
            className="text-sm font-light text-gray-500"
          >
            {year}
          </motion.p>
          <motion.h2
            layout="position"
            layoutId={`title-${name}`}
            className="text-3xl font-medium"
          >
            {name}
          </motion.h2>
          <motion.div
            className="absolute bottom-0 right-0 z-20 flex flex-col justify-evenly gap-4 rounded-br-3xl rounded-tl-3xl p-6 shadow"
            style={{ background: gradient }}
            layoutId={`socials-${name}`}
          >
            <motion.div layoutId={`github-${name}`}>
              <SocialButton href={github} hoverColor="github">
                <GithubSVG />
              </SocialButton>
            </motion.div>
            <motion.div layoutId={`deployment-${name}`}>
              <SocialButton hoverColor="github" href={deployment}>
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
        <motion.div className="z-10" layoutId={`image-${name}`}>
          {image !== "culler" && (
            <Image
              className="aspect-video w-full  rounded-b-3xl"
              src={image}
              alt={name}
              width={1920}
              height={1080}
              quality={100}
            />
          )}
          {image === "culler" && <CullerCard />}
        </motion.div>
      </div>
    </motion.div>
  )
}
