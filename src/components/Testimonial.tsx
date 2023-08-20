import { projectPreviewVariants } from "@/utils/framer"
import { gen } from "culler"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

export default function Testimonial({ children }: Props) {
  const backgroundColor = gen({
    type: "rgb",
    minB: 245,
    minG: 245,
    minR: 245,
  })

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={projectPreviewVariants}
      className="rounded-3xl p-4"
      style={{ backgroundColor }}
    >
      {children}
    </motion.div>
  )
}
