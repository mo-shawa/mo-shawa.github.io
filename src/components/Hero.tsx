import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

import TextBubbles from "@/components/TextBubbles"
import { ease } from "@/utils/framer"

export default function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: scrollContainerRef })
  return (
    <motion.section
      ref={scrollContainerRef}
      className="h-[300vh] overflow-x-clip px-4"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { ease: "linear", delay: 1, duration: 2 },
        }}
        className="absolute left-0 top-0 z-[-1] h-[300vh] w-full bg-gradient-to-b from-pink-100 via-violet-100 to-white"
      />
      <motion.div className="sticky left-0 top-0 mx-auto mb-4 grid h-screen max-w-7xl grid-cols-1 items-center gap-4 md:grid-cols-[2fr_1fr]">
        <TextBubbles scrollYProgress={scrollYProgress} />
        <motion.div
          layoutId="avatar-lg"
          transition={{
            layout: {
              duration: 1,
              ease,
            },
          }}
          style={{
            borderRadius: 20,
          }}
          className="z-0 hidden aspect-square bg-[url('/me.jpg')] bg-cover bg-top md:block "
        ></motion.div>
      </motion.div>
    </motion.section>
  )
}
