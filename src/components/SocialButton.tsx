import { motion, useMotionValue } from 'framer-motion'
import React, { useRef } from 'react'

import { heroCardButtonVariants, socialsVariants } from '@/utils/framer'

export default function SocialButton({
  href,
  children,
  hoverColor = 'github',
  bgColor = 'white',
  isProject = false,
}: SocialButtonProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent) {
    cursorX.set(e.clientX - 16)
    cursorY.set(e.clientY - 16)
  }

  function handleMouseLeave() {
    cursorX.set(0)
    cursorY.set(0)
  }

  let hoverColorClass

  switch (hoverColor) {
    case 'github':
      hoverColorClass = 'hover:bg-github dark:hover:bg-zinc-600'
      break
    case 'twitter':
      hoverColorClass = 'hover:bg-twitter'
      break
    case 'linkedin':
      hoverColorClass = 'hover:bg-linkedin'
      break
  }

  return (
    <motion.a
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={href}
      {...(!isProject && { variants: socialsVariants })}
      target="_blank"
      className={`group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white p-4 shadow-sm duration-200 ease-in-out hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 ${hoverColorClass} transition-all`}
    >
      <div className="object- fill-black transition-colors duration-200 ease-in group-hover:fill-white dark:fill-zinc-200">
        {children}
      </div>
    </motion.a>
  )
}

type SocialButtonProps = {
  href: string
  children?: React.ReactNode
  hoverColor?: string
  bgColor?: string
  isProject?: boolean
}
