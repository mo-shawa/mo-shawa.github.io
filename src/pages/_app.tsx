import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { IntroContext } from "@/contexts/introContext"
import { DataContext } from "@/contexts/dataContext"
import { useState } from "react"
import Head from "next/head"
import { Plus_Jakarta_Sans } from "next/font/google"
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [shouldShowIntro, setShouldShowIntro] = useState(true)
  const [currentDataSource, setCurrentDataSource] = useState<
    "projects" | "testimonials"
  >("projects")
  return (
    <>
      <Head>
        <title>Mahmoud Shawa&apos;s Portfolio</title>
        <meta name="description" content="Mahmoud Shawa's Portfolio" />
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
          <main className={`mx-4 pt-16 ${plusJakartaSans.className}`}>
            <Component {...pageProps} />
          </main>
          {/* </motion.div>
          </AnimatePresence> */}
        </DataContext.Provider>
      </IntroContext.Provider>
    </>
  )
}
