import "@/styles/globals.css"

import { AnimatePresence, motion } from "framer-motion"
import { Plus_Jakarta_Sans } from "next/font/google"
import Head from "next/head"
import { useEffect, useState } from "react"

import Navbar from "@/components/Navbar"
import { DataContext } from "@/contexts/dataContext"
import { IntroContext } from "@/contexts/introContext"
import Lenis from "@studio-freight/lenis"

import type { AppProps } from "next/app"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [shouldShowIntro, setShouldShowIntro] = useState(false)
  const [currentDataSource, setCurrentDataSource] = useState<
    "projects" | "milestones"
  >("projects")

  useEffect(() => {
    const lenis = new Lenis({})

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Head>
        <title>Joud El-Shawa&apos;s Portfolio</title>
        <meta name="description" content="Joud El-Shawa's Portfolio" />
      </Head>
      {/* About commented out code: Going with single page layout for now, may revert . */}
      {/* IntroContext would be used to prevent intro animation from playing when navigating between pages, and only on initial load. Will  */}
      <IntroContext.Provider value={{ shouldShowIntro, setShouldShowIntro }}>
        <DataContext.Provider
          value={{ currentDataSource, setCurrentDataSource }}
        >
          <Navbar />
          {/* Page transitions but no pages 😳 */}
          {/* <AnimatePresence mode="wait">
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
            > */}
          <main className={`${plusJakartaSans.className}`}>
            <Component {...pageProps} />
          </main>
          {/* </motion.div>
          </AnimatePresence> */}
        </DataContext.Provider>
      </IntroContext.Provider>
    </>
  )
}
