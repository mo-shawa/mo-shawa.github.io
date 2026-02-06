import { gen } from 'culler'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { testimonialVariants } from '@/utils/framer'
import { useTheme } from '@/contexts/themeContext'

type Props = {
  text: string
}

function genDarkBg() {
  return gen({
    type: 'rgb',
    minR: 25,
    maxR: 40,
    minG: 25,
    maxG: 40,
    minB: 28,
    maxB: 50,
  })
}

function genLightBg() {
  return gen({ type: 'rgb', minR: 235, minG: 235, minB: 235 })
}

export default function Testimonial({ text }: Props) {
  const { theme } = useTheme()
  const [background, setBackground] = useState(() =>
    theme === 'dark' ? genDarkBg() : genLightBg()
  )

  // Regenerate on theme change
  useEffect(() => {
    setBackground(theme === 'dark' ? genDarkBg() : genLightBg())
  }, [theme])

  const spanBreak = 105

  const spanClass = (text: string) => {
    const span = Math.floor(text.length / spanBreak) + 1
    switch (span) {
      case 1:
        return 'sm:row-span-1 sm:col-span-1 lg:row-span-2 lg:col-span-1'
      case 2:
        return 'sm:row-span-2 sm:col-span-1 lg:row-span-4 lg:col-span-1'
      case 3:
        return 'sm:row-span-3 sm:col-span-1 lg:row-span-4 lg:col-span-1'
      case 4:
        return 'sm:row-span-2 sm:col-span-1 lg:row-span-3 lg:col-span-2'
      default:
        return 'sm:row-span-5 sm:col-span-2 lg:row-span-5 lg:col-span-2'
    }
  }

  return (
    <motion.div
      variants={testimonialVariants}
      className={`col-span-1 row-span-1 flex h-full cursor-pointer flex-col justify-between rounded-3xl transition-colors duration-500 ${spanClass(
        text
      )}`}
      style={{ background }}
      onClick={() => {
        setBackground(theme === 'dark' ? genDarkBg() : genLightBg())
      }}
    >
      <div className="h-min p-6 text-lg">
        <p className="text-zinc-800 dark:text-zinc-200">{text}</p>
      </div>

      <div className="ml-auto pb-5 pr-5">
        <motion.h2 className="text-xs font-light text-zinc-500 dark:text-zinc-400">
          - Software Engineering Student
        </motion.h2>
      </div>
    </motion.div>
  )
}
