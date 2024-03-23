import { motion } from "framer-motion"
import Link from "next/link"

import milestoneData, { Milestone } from "@/data/milestones"
import { milestonesContainerVariants, milestoneVariants } from "@/utils/framer"

export default function Timeline() {
  return (
    <motion.ul
      key="milestones-container"
      initial="hidden"
      animate="visible"
      variants={milestonesContainerVariants}
      exit={{ opacity: 0 }}
      className="timeline timeline-vertical mx-auto w-full max-w-7xl"
    >
      {milestoneData.map((milestone, index) => (
        <motion.li
          key={milestone.date}
          variants={milestoneVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[6rem]" // @joud change this value [10rem] to set the gap between milestones
        >
          <div className="timeline-start">{milestone.date}</div>
          {index !== 0 && <hr />}

          <div className="timeline-middle">
            <div className="h-3 w-3 rounded-full bg-black"></div>
          </div>
          <Wrapper milestone={milestone}>{milestone.text}</Wrapper>
          {index !== milestoneData.length - 1 && <hr />}
        </motion.li>
      ))}
    </motion.ul>
  )
}

const Wrapper = ({
  children,
  milestone,
}: {
  children: React.ReactNode
  milestone: Milestone
}) =>
  milestone.href ? (
    <Link
      className="timeline-box timeline-end cursor-pointer border border-sky-500 transition-colors hover:bg-sky-500 hover:text-white" // @joud change these classes for clickable milestones
      href={milestone.href}
      target="_blank"
    >
      {children}
    </Link>
  ) : (
    <div className="timeline-box timeline-end">{children}</div>
  )
