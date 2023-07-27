import { motion } from "framer-motion"
import { textMaskVariants, textMaskChildVariants } from "@/utils/framer"

type TextMaskProps = {
  children: string
  className?: string
  delay?: number
  type?: "word" | "letter"
  layoutId?: string
}

export default function TextMask({
  children,
  className,
  delay = 0,
  type = "word",
  layoutId,
}: TextMaskProps) {
  const splitOn = type === "word" ? " " : ""

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={textMaskVariants}
      custom={delay}
      layoutId={layoutId}
    >
      {children.split(splitOn).map((child, i) => (
        <motion.span
          key={i}
          variants={textMaskChildVariants}
          className="inline-block"
        >
          {child}
          {type === "word" && <>&nbsp;</>}
        </motion.span>
      ))}
    </motion.div>
  )
}
