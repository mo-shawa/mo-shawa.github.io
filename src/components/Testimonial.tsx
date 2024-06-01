import { gen } from "culler"
import { motion } from "framer-motion"
import { useState } from "react"

import { testimonialVariants } from "@/utils/framer"

type Props = {
  text: string
}

export default function Testimonial({ text }: Props) {
  const [background, setBackground] = useState(
    gen({
      type: "rgb",
      minB: 245,
      minG: 245,
      minR: 245,
    })
  )

  const spanBreak = 105

  const spanClass = (text: string) => {
    const span = Math.floor(text.length / spanBreak) + 1
    console.log({ text, span })
    switch (span) {
      case 1:
        return "sm:row-span-1 sm:col-span-1 lg:row-span-2 lg:col-span-1"
      case 2:
        return "sm:row-span-2 sm:col-span-1 lg:row-span-4 lg:col-span-1"
      case 3:
        return "sm:row-span-3 sm:col-span-1 lg:row-span-4 lg:col-span-1"
      case 4:
        return "sm:row-span-2 sm:col-span-1 lg:row-span-3 lg:col-span-2"
      default:
        return "sm:row-span-5 sm:col-span-2 lg:row-span-5 lg:col-span-2"
    }
  }

  return (
    <motion.div
      variants={testimonialVariants}
      className={`col-span-1 row-span-1 flex h-full cursor-pointer flex-col justify-between rounded-3xl  transition-colors duration-500 ${spanClass(
        text
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
        <p>{text}</p>
      </div>

      <div className="ml-auto pb-5 pr-5">
        <motion.h2 className="text-xs font-light">
          - Software Engineering Student
        </motion.h2>
      </div>
    </motion.div>
  )
}
