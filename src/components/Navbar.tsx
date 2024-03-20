// import Link from "next/link"
import { AnimatePresence, motion, useAnimate } from "framer-motion"
// import { useRouter } from "next/router"
import { ease } from "@/utils/framer"
import { useContext, useEffect, useState } from "react"
import { genGradient } from "@/utils/culler"
import TextMask from "./TextMask"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
// import { DataContext, DataContextType } from "@/contexts/dataContext"
import { Plus_Jakarta_Sans } from "next/font/google"
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Navbar() {
  {
    /* Commented out code required for multipage setup in the future */
  }
  // const router = useRouter()
  // const [logoHovered, setLogoHovered] = useState<boolean>(false)
  const [scope, animate] = useAnimate()
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  // const { currentDataSource, setCurrentDataSource } = useContext(
  //   DataContext
  // ) as DataContextType
  const [gradient, setGradient] = useState<string>(
    genGradient({
      direction: "to bottom right",
      type: "rgb",
      minB: 212,
      minG: 212,
      minR: 212,
    })
  )

  const orbAnimation = async () => {
    await animate(scope.current, {
      opacity: 0,
      transition: {
        duration: 2,
        ease: ease,
        delay: shouldShowIntro ? 4 : 0,
      },
    })

    setGradient(
      genGradient({
        direction: "to bottom right",
        type: "rgb",
        minB: 200,
        minG: 200,
        minR: 200,
      })
    )

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
      className={`fixed inset-0 z-50 h-16 w-full text-slate-800  ${plusJakartaSans.className} flex items-center`}
    >
      <motion.div className="relative mx-auto flex max-w-7xl items-center justify-center">
        <div className="flex items-center gap-2 rounded-3xl bg-white/70 p-4  filter backdrop-blur-xl">
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
          <motion.div className="relative flex  items-start px-2">
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
                JOUD.SHAWA.DEV
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
