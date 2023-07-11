import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { IntroContext, IntroDispatchContext } from "@/contexts/introContext"
import { state, dispatch } from "@/reducers/introReducer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntroContext.Provider value={state}>
      <IntroDispatchContext.Provider value={dispatch}>
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
      </IntroDispatchContext.Provider>
    </IntroContext.Provider>
  )
}
