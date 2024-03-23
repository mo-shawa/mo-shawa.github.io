import { AnimatePresence, MotionValue, useTransform } from "framer-motion"
import { useState } from "react"

import textBubbleData from "@/data/text-bubbles"

import TextBubble from "./Textbubble"

type Props = {
  scrollYProgress: MotionValue<number>
}

export default function TextBubbles({ scrollYProgress }: Props) {
  const [visible, setVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ])

  useTransform(scrollYProgress, (value) => {
    const newVisible = visible.map((_, index) => {
      if (value >= index * 0.15) return true
      return false
    })
    if (JSON.stringify(newVisible) !== JSON.stringify(visible))
      setVisible(newVisible)
  })

  return (
    <div
      id="textbubble-container"
      className="flex min-h-[30rem] flex-col gap-4"
    >
      {textBubbleData.map((data, index) => (
        <TextBubble visible={visible[index]} key={index}>
          {data}
        </TextBubble>
      ))}
    </div>
  )
}
