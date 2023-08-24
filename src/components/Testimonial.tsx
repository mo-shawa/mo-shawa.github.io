import { testimonialVariants } from "@/utils/framer"
import { gen } from "culler"
import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
  text: string
}

export default function Testimonial({ text }: Props) {
  const [background, setBackground] = useState(
    gen({
      type: "rgb",
      minB: 244,
      minG: 244,
      minR: 244,
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
      variants={testimonialVariants}
      className={`col-span-1 row-span-1 flex cursor-pointer  flex-col justify-between rounded-3xl transition-colors duration-500 ${spanClass(
        text
      )}`}
      style={{ background }}
      onClick={() => {
        setBackground(
          gen({
            type: "rgb",
            minB: 244,
            minG: 244,
            minR: 244,
          })
        )
      }}
    >
      <div className="h-min p-6 text-lg">
        <p>{text}</p>
      </div>

      <div className="ml-auto pb-5 pr-5">
        <motion.h2 className="text-xs font-thin">
          - Software Engineering Student
        </motion.h2>
      </div>
    </motion.div>
  )
}
