import { motion } from "framer-motion"

import { textBubbleVariants } from "@/utils/framer"

type Props = {
  children: React.ReactNode
  visible: boolean
}

export default function TextBubble({ children, visible }: Props) {
  return (
    <motion.div key={children?.toString()} className="chat chat-end">
      <motion.div
        variants={textBubbleVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="chat-bubble max-w-lg  bg-[#0b122b] text-white md:text-xl"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={
          visible
            ? {
                scale: 1,
                transition: { type: "spring", stiffness: 250, damping: 20 },
              }
            : { scale: 0 }
        }
        className="chat-image avatar block md:hidden"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="/me.jpg" />
        </div>
      </motion.div>
    </motion.div>
  )
}
