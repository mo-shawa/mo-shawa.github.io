import { Milestone } from "@/data/milestones"
import { milestoneVariants } from "@/utils/framer"
import { gen } from "culler"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { ReactNode, useState } from "react"

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

  const Wrapper = ({children}: {children: React.ReactNode}) => milestone.href ? <Link className="flex flex-col justify-between" href={milestone.href} target="_blank">{children}</Link> : <div className="flex flex-col justify-between">{children}</div>

  return (
    <motion.div
      variants={milestoneVariants}
      className={`col-span-1 row-span-1 border-4 border-transparent rounded-3xl transition-all duration-500 ${spanClass(
        milestone.text
      )} ${milestone.href && "hover:border-rose-200 cursor-pointer"}`}
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
      style={{background}}
    >
      <Wrapper>
        <div className="h-min p-6 text-lg">
          <p>{milestone.text}</p>
        </div>
        <div className="ml-auto pb-5 pr-5">
          <motion.h2 className="text-xs font-thin">
        {milestone.date}
          </motion.h2>
        </div>
      </Wrapper>
    </motion.div>
  )
}
