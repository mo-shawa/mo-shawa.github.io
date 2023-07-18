import Link from "next/link"
import { motion, useAnimate } from "framer-motion"
import { useRouter } from "next/router"
import { ease } from "@/utils/framer"
import { useContext, useEffect, useState } from "react"
import { genGradient } from "@/utils/culler"
import TextMask from "./TextMask"
import { IntroContext, IntroContextType } from "@/contexts/introContext"

export default function Navbar() {
  const router = useRouter()
  const [scope, animate] = useAnimate()
  const [logoHovered, setLogoHovered] = useState<boolean>(false)
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  const [gradient, setGradient] = useState<string>(
    genGradient({
      direction: "to bottom right",
      type: "rgb",
      minB: 212,
      minG: 212,
      minR: 212,
    })
  )

  useEffect(() => {
    const orbAnimation = async () => {
      await animate(scope.current, {
        opacity: 0,
        transition: {
          duration: 2,
          ease: ease,
          delay: shouldShowIntro ? 2 : 0,
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

    orbAnimation()
  }, [router.pathname])

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  return (
    <motion.nav
      initial={{}}
      animate={{}}
      transition={{ ease, delay: shouldShowIntro ? 4 : 0 }}
      className="fixed top-0 z-50 w-full  bg-white/70 p-4 text-zinc-800 filter backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 2.1 }}
            dragElastic={0.1}
            ref={scope}
            layoutId="orb"
            className="orb inset-0 aspect-square h-5 w-5 rounded-full"
            style={{
              background: gradient,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div className="relative flex  items-start px-2">
            <Link
              onClick={(e) => {
                if (router.pathname === "/") {
                  e.preventDefault()
                }
              }}
              href="/"
              onMouseOver={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <TextMask
                type="letter"
                className="whitespace-nowrap text-sm font-semibold tracking-widest"
              >
                SHAWA.DEV
              </TextMask>
              {logoHovered && (
                <motion.span
                  transition={{ duration: 1.5, ease }}
                  layoutId="active-underline"
                  className="absolute left-0 top-full block h-0.5 w-full rounded-full bg-zinc-400"
                />
              )}
            </Link>
          </motion.div>
        </div>
        <div className="text-md flex gap-12  ">
          {navLinks.map((link) => (
            <Link
              className={`relative hover:text-zinc-500 ${
                router.pathname === link.link && "text-zinc-800"
              }}`}
              href={link.link}
              key={link.name}
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
        </div>
      </div>
    </motion.nav>
  )
}
