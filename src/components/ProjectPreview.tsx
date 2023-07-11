import GithubSVG from "../../public/github.svg"
import { motion } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import { projectPreviewVariants } from "@/utils/framer"
import { genGradient } from "@/utils/culler"
import { useRef } from "react"
import { gen } from "culler"

type ProjectPreviewProps = Project & {
  setSelected: React.Dispatch<React.SetStateAction<Partial<Project> | null>>
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
  setSelected,
}: ProjectPreviewProps) {
  const cullerRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { current } = cullerRef

    if (!current) return

    const { clientX, clientY } = evt
    const { x, y, width, height } = current.getBoundingClientRect()

    const currentX = clientX - x
    const currentY = clientY - y

    const color = gen({
      r: Math.abs(currentX - 155),
      g: 50 + currentY / 10,
      b: currentY,
      a: 0.3,
    })

    current.style.background = color
  }

  function handleOnClick() {
    setSelected({
      name,
      description,
      github,
      deployment,
      image,
      technologies,
    })
  }

  return (
    <motion.div
      layoutId={`card-${name}`}
      onClick={handleOnClick}
      className={` cursor-pointer overflow-hidden rounded-3xl`}
      variants={projectPreviewVariants}
      initial="hidden"
      whileHover="hover"
      whileInView="visible"
    >
      <div className="relative h-full w-full rounded-2xl bg-contain bg-fixed bg-center bg-no-repeat lg:bg-scroll">
        <div
          className="rounded-t-lg px-10 py-6"
          style={{ background: gradient }}
        >
          <motion.h2
            layoutId={`title-${name}`}
            className="text-3xl font-medium"
          >
            {name}
          </motion.h2>
          <motion.div
            className="absolute bottom-0 right-0 flex flex-col justify-evenly gap-4  rounded-tl-3xl p-6 shadow"
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
        <motion.div className="bg-gradient-to-br from-slate-200 to-red-200">
          {image !== "culler" && (
            <Image
              className="aspect-video w-full rounded-b-3xl"
              src={image}
              alt={name}
              width={1920}
              height={1080}
            />
          )}
          {image === "culler" && (
            <div
              ref={cullerRef}
              className="aspect-video h-full w-full rounded-b-3xl"
              onMouseMove={handleMouseMove}
            ></div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
