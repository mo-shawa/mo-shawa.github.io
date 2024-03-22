import { motion, MotionValue, useTransform } from 'framer-motion'

type Props = {
  children: React.ReactNode
  scrollYProgress: MotionValue<number>
  index: number
}

export default function TextBubble({
  children,
  scrollYProgress,
  index,
}: Props) {
  console.log("TextBubble rendering")

  const opacity = useTransform(
    scrollYProgress,
    [0.15 * index, 0.15 * (index + 1)],
    [0, 1]
  )

  return (
    <motion.div
      key={children?.toString()}
      style={{ opacity }}
      className="chat-bubble max-w-lg bg-primary text-xl opacity-0"
    >
      {children}
    </motion.div>
  )
}
