import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { IntroContext, IntroDispatchContext } from "@/contexts/introContext"
import { useReducer } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(introReducer, initialState)
  return (
    <IntroContext.Provider value={state}>
      <IntroDispatchContext.Provider value={dispatch}>
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
      </IntroDispatchContext.Provider>
    </IntroContext.Provider>
  )
}

export const initialState = {
  shouldPlayIntroSequence: true,
}

export function introReducer(state = initialState, action: "STOP_INTRO") {
  switch (action) {
    case "STOP_INTRO":
      return {
        shouldPlayIntroSequence: false,
      }
    default:
      return state
  }
}
