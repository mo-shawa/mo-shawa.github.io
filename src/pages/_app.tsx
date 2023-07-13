import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { IntroContext } from "@/contexts/introContext"
import { useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [shouldShowIntro, setShouldShowIntro] = useState(true)
  return (
    <IntroContext.Provider value={{ shouldShowIntro, setShouldShowIntro }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={Component.name}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </IntroContext.Provider>
  )
}
