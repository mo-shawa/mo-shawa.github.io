import GithubSVG from "../../public/github.svg"
import { motion } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import { gen } from "culler"
import { projectPreviewVariants } from "@/utils/framer"
import { genGradient } from "@/utils/culler"

type ProjectPreviewProps = Project & {
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
  tags,
  gradient,
  setSelected,
}: ProjectPreviewProps) {
  function handleOnClick() {
    setSelected({
      name,
      description,
      github,
      deployment,
      image,
      technologies,
      tags,
    })
  }

  return (
    <motion.div
      layoutId={`card-${name}`}
      onClick={handleOnClick}
      className={`min-h-[30rem] cursor-pointer overflow-hidden rounded-3xl`}
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
          <motion.h2 layoutId={`title-${name}`} className="text-xl font-medium">
            {name}
          </motion.h2>
          <div
            className="absolute bottom-0 right-0 flex flex-col justify-evenly gap-4  rounded-tl-3xl p-6 shadow"
            style={{ background: gradient }}
          >
            <motion.div>
              <SocialButton href={github} hoverColor="github">
                <GithubSVG />
              </SocialButton>
            </motion.div>
            <motion.div>
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
          </div>
        </div>
        <motion.div>
          <Image
            className="aspect-[4/3] w-full rounded-b-3xl"
            src={image}
            alt={name}
            width={993}
            height={745}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
