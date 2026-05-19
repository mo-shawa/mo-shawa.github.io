import { motion, useMotionValue } from 'framer-motion'
import React, { useRef } from 'react'

import { heroCardButtonVariants, socialsVariants } from '@/utils/framer'

export default function SocialButton({
  href,
  disabled,
  tooltip,
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

  const baseClasses = disabled
    ? 'cursor-not-allowed opacity-40'
    : 'hover:shadow-md'

  return (
    <motion.a
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={disabled ? undefined : { scale: 1.1 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      href={disabled ? undefined : href}
      target={disabled ? undefined : '_blank'}
      rel={disabled ? undefined : 'noopener noreferrer'}
      title={tooltip}
      aria-label={tooltip}
      {...(!isProject && !disabled && { variants: socialsVariants })}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      className={`group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white p-4 shadow-sm duration-200 ease-in-out dark:border-zinc-700 dark:bg-zinc-800 ${baseClasses} ${hoverColorClass} transition-all`}
    >
      <div className="fill-black transition-colors duration-200 ease-in group-hover:fill-white dark:fill-zinc-200">
        {children}
      </div>
    </motion.a>
  )
}

type SocialButtonProps = {
  href?: string
  disabled?: boolean
  tooltip?: string
  children?: React.ReactNode
  hoverColor?: string
  bgColor?: string
  isProject?: boolean
}
