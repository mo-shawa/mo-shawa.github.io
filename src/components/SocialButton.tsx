import { motion, useMotionValue } from "framer-motion"
import React, { useRef } from "react"

import { heroCardButtonVariants, socialsVariants } from "@/utils/framer"

export default function SocialButton({
  href,
  children,
  hoverColor = "github",
  bgColor = "white",
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

  let bgColorClass
  let hoverColorClass

  switch (bgColor) {
    // may add more colors later
    case "white":
      bgColorClass = "bg-white"
      break
  }

  switch (hoverColor) {
    case "github":
      hoverColorClass = "hover:bg-github"
      break
    case "twitter":
      hoverColorClass = "hover:bg-twitter"
      break
    case "linkedin":
      hoverColorClass = "hover:bg-linkedin"
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
      className={`group flex h-10 w-10 items-center justify-center rounded-full border p-4 shadow-sm duration-200 ease-in-out ${bgColorClass} hover:shadow-md ${hoverColorClass} transition-all`}
    >
      <div className="object- fill-black transition-colors duration-200 ease-in group-hover:fill-white">
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
