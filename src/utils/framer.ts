import { AnimationProps } from "framer-motion"

export const ease = [0.6, 0.01, 0.05, 0.95]

export const heroCardVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      delay: 1.5,
    },
  },
}

export const socialsContainerVariants: AnimationProps["variants"] = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
}

export const socialsVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease,
    },
  },
}

export const contactModalButtonVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
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

export const heroCardButtonVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
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

export const projectContainerVariants: AnimationProps["variants"] = {
  hidden: {},
  visible: {
    transition: {
      delay: 5.5,
      delayChildren: 4.5,
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

export const testimonialsContainerVariants: AnimationProps["variants"] = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const testimonialVariants: AnimationProps["variants"] = {
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
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
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

export const buttonVariants: AnimationProps["variants"] = {}

export const techPillContainerVariants: AnimationProps["variants"] = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
}

export const techPillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
}
