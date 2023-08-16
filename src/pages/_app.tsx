import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { IntroContext } from "@/contexts/introContext"
import { useState } from "react"
import Head from "next/head"
import { Plus_Jakarta_Sans } from "next/font/google"
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [shouldShowIntro, setShouldShowIntro] = useState(true)
  return (
    <>
      <Head>
        <title>Mahmoud Shawa's Portfolio</title>
        <meta name="description" content="Mahmoud Shawa's Portfolio" />
      </Head>
      <IntroContext.Provider value={{ shouldShowIntro, setShouldShowIntro }}>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={Component.name}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            className={`${plusJakartaSans.className} overflow-hidden`}
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
            <main className="no-scrollbar mx-4 h-screen overflow-auto pt-16">
              <Component {...pageProps} />
            </main>
          </motion.div>
        </AnimatePresence>
      </IntroContext.Provider>
    </>
  )
}
