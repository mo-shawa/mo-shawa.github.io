import Link from "next/link"
import { gen } from "culler"
import { motion, useAnimate, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import { ease } from "@/utils/framer"
import { useEffect, useState } from "react"
import { genGradient } from "@/utils/culler"
import TextMask from "./TextMask"

export default function Navbar() {
  const router = useRouter()
  const [scope, animate] = useAnimate()
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
        },
      })

      setGradient(
        genGradient({
          direction: "to bottom right",
          type: "rgb",
          minB: 212,
          minG: 212,
          minR: 212,
        })
      )

      await animate(scope.current, {
        opacity: 1,
        transition: {
          duration: 6.5,
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
    <motion.nav className="py-4 filter backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            ref={scope}
            layoutId="logo"
            className="h-5 w-5 rounded-full"
            style={{
              background: gradient,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <TextMask
            type="letter"
            className="text-sm font-semibold tracking-widest"
          >
            SHAWA.DEV
          </TextMask>
        </Link>
        <div className="text-md flex gap-12 text-zinc-400">
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
                  transition={{ duration: 1.5, ease }}
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
