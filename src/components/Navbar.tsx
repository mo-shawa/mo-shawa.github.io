// import Link from "next/link"
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
// import { DataContext, DataContextType } from "@/contexts/dataContext"
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'

import { IntroContext, IntroContextType } from '@/contexts/introContext'
import { genGradient } from '@/utils/culler'
// import { useRouter } from "next/router"
import { ease } from '@/utils/framer'
import { useTheme } from '@/contexts/themeContext'

import TextMask from './TextMask'
import ThemeToggle from './ThemeToggle'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Navbar() {
  {
    /* Commented out code required for multipage setup in the future */
  }
  // const router = useRouter()
  // const [logoHovered, setLogoHovered] = useState<boolean>(false)
  const [scope, animate] = useAnimate()
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  const { theme } = useTheme()
  // const { currentDataSource, setCurrentDataSource } = useContext(
  //   DataContext
  // ) as DataContextType

  const orbGradientOptions = () => {
    if (theme === 'dark') {
      return {
        direction: 'to bottom right' as const,
        type: 'rgb' as const,
        minB: 40,
        minG: 40,
        minR: 40,
        maxB: 120,
        maxG: 120,
        maxR: 120,
      }
    }
    return {
      direction: 'to bottom right' as const,
      type: 'rgb' as const,
      minB: 212,
      minG: 212,
      minR: 212,
    }
  }

  const [gradient, setGradient] = useState<string>(
    genGradient(orbGradientOptions())
  )

  // Regenerate orb gradient on theme change
  useEffect(() => {
    setGradient(genGradient(orbGradientOptions()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const orbAnimation = async () => {
    await animate(scope.current, {
      opacity: 0,
      transition: {
        duration: 2,
        ease: ease,
        delay: shouldShowIntro ? 4 : 0,
      },
    })

    setGradient(genGradient(orbGradientOptions()))

    await animate(scope.current, {
      opacity: 1,
      transition: {
        ease,
      },
    })
  }

  // const navLinks = [
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "Resume",
  //     link: "/resume",
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //   },
  // ]

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease, delay: shouldShowIntro ? 2 : 0, duration: 1 }}
      className={`fixed inset-0 z-50 h-16 w-full  ${plusJakartaSans.className} flex items-center`}
    >
      <motion.div className="relative mx-auto flex max-w-7xl items-center justify-center">
        <div className="flex items-center gap-2 rounded-3xl bg-white/70 p-4  filter backdrop-blur-xl dark:bg-zinc-900/70 dark:text-zinc-100">
          <motion.div
            drag
            onClick={orbAnimation}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 2.1 }}
            dragElastic={0.1}
            ref={scope}
            layoutId="orb"
            className="orb inset-0 aspect-square h-5 w-5 cursor-pointer rounded-full active:cursor-grabbing"
            style={{
              background: gradient,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div className="relative flex items-start">
            <div
              // onClick={(e) => {
              //   if (router.pathname === "/") {
              //     e.preventDefault()
              //   }
              // }}
              onClick={orbAnimation}
              // onMouseOver={() => setLogoHovered(true)}
              // onMouseLeave={() => setLogoHovered(false)}
            >
              <TextMask
                type="letter"
                className="whitespace-nowrap text-sm font-semibold tracking-widest"
              >
                SHAWA.DEV
              </TextMask>
              {/* {logoHovered && (
                <motion.span
                  transition={{ duration: 1.5, ease }}
                  layoutId="active-underline"
                  className="absolute left-0 top-full block h-0.5 w-full rounded-full bg-zinc-400"
                />
              )} */}
            </div>
          </motion.div>
          <ThemeToggle />
        </div>
        {/* <div className="text-md flex gap-12  ">
          {navLinks.map((link) => (
            <Link
              className={`relative hover:text-zinc-500 ${
                router.pathname === link.link && "text-zinc-800"
              }`}
              key={link.name}
              href={link.link}
            >
              {link.name}
              {router.pathname === link.link && (
                <motion.span
                  transition={{ duration: 0.8, ease }}
                  layoutId="active-underline"
                  className="absolute left-0 top-full block h-0.5 w-full rounded-full bg-zinc-400"
                />
              )}
            </Link>
          ))}
        </div> */}
      </motion.div>
    </motion.nav>
  )
}
