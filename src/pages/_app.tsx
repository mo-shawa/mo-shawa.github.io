import '@/styles/globals.css'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'

import Navbar from '@/components/Navbar'
import { DataContext } from '@/contexts/dataContext'
import IntroContextProvider from '@/contexts/introContext'
import { ThemeProvider } from '@/contexts/themeContext'

import type { AppProps } from 'next/app'
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [currentDataSource, setCurrentDataSource] = useState<
    'projects' | 'testimonials'
  >('projects')
  return (
    <>
      <Head>
        <title>Mahmoud Shawa&apos;s Portfolio</title>
        <meta
          name="description"
          content="Mahmoud Shawa is a Fullstack Engineer building human-in-the-loop AI products. 2x Founding Engineer with an exit"
        />
      </Head>
      {/* About commented out code: Going with single page layout for now, may revert . */}
      {/* IntroContext would be used to prevent intro animation from playing when navigating between pages, and only on initial load. Will  */}
      <ThemeProvider>
        <IntroContextProvider>
          <DataContext.Provider
            value={{ currentDataSource, setCurrentDataSource }}
          >
            <Navbar />
            <main className={`mx-4 pt-16 ${plusJakartaSans.className}`}>
              <Component {...pageProps} />
            </main>
          </DataContext.Provider>
        </IntroContextProvider>
      </ThemeProvider>
    </>
  )
}
