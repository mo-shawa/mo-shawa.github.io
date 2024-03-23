import {
  motion,
  MotionValue,
  useAnimationControls,
  useTransform,
} from "framer-motion"
import { useState } from "react"

import { textBubbleVariants } from "@/utils/framer"

type Props = {
  children: React.ReactNode
  visible: boolean
}

export default function TextBubble({ children, visible }: Props) {
  return (
    <motion.div
      key={children?.toString()}
      variants={textBubbleVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="chat chat-end"
    >
      <div className="chat-bubble max-w-lg bg-violet-500 md:text-xl">
        {children}
      </div>
      <div className="chat-image avatar block md:hidden">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="/me.jpg" />
        </div>
      </div>
    </motion.div>
  )
}
