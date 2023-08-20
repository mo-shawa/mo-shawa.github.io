import { projectPreviewVariants, testimonialVariants } from "@/utils/framer"
import { gen } from "culler"
import { motion } from "framer-motion"

type Props = {
  text: string
}

export default function Testimonial({ text }: Props) {
  const backgroundColor = gen({
    type: "rgb",
    minB: 245,
    minG: 245,
    minR: 245,
  })

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
      className={`col-span-1 row-span-1 flex flex-col justify-between rounded-3xl ${spanClass(
        text
      )}`}
      style={{ backgroundColor }}
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
