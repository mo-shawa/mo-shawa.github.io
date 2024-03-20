import { Milestone } from "@/data/milestones"
import { milestoneVariants } from "@/utils/framer"
import { gen } from "culler"
import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
  milestone: Milestone
}

export default function Milestones({ milestone }: Props) {
  const [background, setBackground] = useState(
    gen({
      type: "rgb",
      minB: 245,
      minG: 245,
      minR: 245,
    })
  )

  const spanBreak = 100

  const spanClass = (text: string) => {
    const span = Math.floor(text.length / spanBreak) + 1
    switch (span) {
      case 1:
        return "sm:row-span-1 sm:col-span-1"
      case 2:
        return "sm:row-span-2 sm:col-span-1"
      case 3:
        return "sm:row-span-3 sm:col-span-1"
      default:
        return "sm:row-span-2 sm:col-span-2"
    }
  }

  return (
    <motion.div
      variants={milestoneVariants}
      className={`col-span-1 row-span-1 flex cursor-pointer  flex-col justify-between rounded-3xl transition-colors duration-500 ${spanClass(
        milestone.text
      )}`}
      style={{ background }}
      onClick={() => {
        setBackground(
          gen({
            type: "rgb",
            minB: 230,
            minG: 230,
            minR: 230,
          })
        )
      }}
    >
      <div className="h-min p-6 text-lg">
        <p>{milestone.text}</p>
      </div>

      <div className="ml-auto pb-5 pr-5">
        <motion.h2 className="text-xs font-thin">
      {milestone.date}
        </motion.h2>
      </div>
    </motion.div>
  )
}
