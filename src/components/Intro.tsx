import { motion } from "framer-motion"
import { useContext } from "react"

import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { ease, textBubbleVariants } from "@/utils/framer"

export default function Intro() {
  const { setShouldShowIntro } = useContext(IntroContext) as IntroContextType
  const children = "Hi, I'm Joud!"

  return (
    <motion.div
      initial={{ opacity: 0.999 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => setShouldShowIntro(false)}
      transition={{ duration: 2, ease }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll px-4"
    >
      <motion.div
        key={children}
        className="chat chat-end"
        transition={{
          duration: 2,
          ease,
        }}
        style={{
          scale: 1.5,
        }}
      >
        <motion.div
          layoutId="hello"
          variants={textBubbleVariants}
          initial="hidden"
          animate="visible"
          className="chat-bubble max-w-lg bg-[#0b122b] text-white md:text-xl"
        >
          {children}
        </motion.div>

        {/* Mobile avatar */}
        <motion.div
          initial={{ scale: 0 }}
          layoutId="avatar-sm"
          animate={{
            scale: 1,
            transition: { type: "spring", stiffness: 250, damping: 20 },
          }}
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

        {/* Desktop avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { type: "spring", stiffness: 250, damping: 20 },
          }}
          layoutId="avatar-lg"
          transition={{
            layout: {
              duration: 1,
              ease,
            },
          }}
          style={{
            borderRadius: 50,
          }}
          className="z-0 hidden h-10 w-10 bg-[url('/me.jpg')] bg-cover bg-center md:block"
        ></motion.div>
      </motion.div>
    </motion.div>
  )
}
