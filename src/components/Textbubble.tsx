import { motion, MotionValue, useAnimationControls, useTransform } from 'framer-motion'
import { useState } from 'react'

import { textBubbleVariants } from '@/utils/framer'

type Props = {
  children: React.ReactNode
  visible: boolean
}

export default function TextBubble({ children, visible }: Props) {
  return (
    <motion.div
      key={children?.toString()}
      variants={textBubbleVariants}
      animate={visible ? "visible" : "hidden"}
      className="chat-bubble max-w-lg bg-primary text-xl"
    >
      {children}
    </motion.div>
  )
}
