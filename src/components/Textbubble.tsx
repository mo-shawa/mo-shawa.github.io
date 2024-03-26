import { motion } from "framer-motion"

import { ease, textBubbleVariants } from "@/utils/framer"

type Props = {
  children: React.ReactNode
  visible: boolean
  index: number
}

export default function TextBubble({ children, visible, index }: Props) {
  return (
    <motion.div key={children?.toString()} className="chat chat-end">
      <motion.div
        {...(index === 0 && { layoutId: "hello" })}
        variants={textBubbleVariants}
        initial={index === 0 ? "visible" : "hidden"}
        animate={visible || index === 0 ? "visible" : "hidden"}
        className="chat-bubble max-w-lg  bg-[#0b122b] text-white md:text-xl"
        transition={{
          layout: {
            duration: 1.2,
            ease,
          },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scale: index === 0 ? 1 : 0 }}
        {...(index === 0 && { layoutId: "avatar-sm" })}
        animate={
          visible || index === 0
            ? {
                scale: 1,
                transition: { type: "spring", stiffness: 250, damping: 20 },
              }
            : { scale: 0 }
        }
        className="chat-image avatar block md:hidden"
        transition={{
          layout: {
            duration: 1,
            ease,
          },
        }}
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="/me.jpg" />
        </div>
      </motion.div>
    </motion.div>
  )
}
