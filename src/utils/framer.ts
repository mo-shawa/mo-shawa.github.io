import { AnimationProps } from "framer-motion"

export const ease = [0.6, 0.01, 0.05, 0.95]

export const projectContainerVariants: AnimationProps["variants"] = {
  hidden: {},
  visible: {
    transition: {
      delay: 1.5,
      staggerChildren: 0.2,
    },
  },
}

export const projectPreviewVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
  hover: {
    y: -10,
    transition: {
      ease,
    },
  },
}

export const textMaskVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 0.5,
      ease,
    },
  },
}

export const textMaskChildVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

export const buttonVariants: AnimationProps["variants"] = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      ease,
    },
  },
}

export const techPillContainerVariants: AnimationProps["variants"] = {
  hidden: { width: 0, height: 0 },
  visible: {
    width: "auto",
    height: "auto",
    transition: {
      delay: 1,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
}

export const techPillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}
