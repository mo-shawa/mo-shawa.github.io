import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

import projectData from "@/data/projects"
import { genGradient } from "@/utils/culler"
import { projectContainerVariants } from "@/utils/framer"

import ProjectModal from "./ProjectModal"
import ProjectPreview from "./ProjectPreview"

type Props = {
  selected: Project | null
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>
}

export default function Projects({ selected, setSelected }: Props) {
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

  return (
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
}
