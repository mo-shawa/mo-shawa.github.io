import { motion } from "framer-motion"
import Poppers from "./Poppers"
import TextMask from "./TextMask"
import {
  heroCardButtonVariants,
  ease,
  heroCardVariants,
  socialsContainerVariants,
} from "@/utils/framer"
import SocialButton from "./SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { useContext } from "react"

const titleClasses =
  "mix pointer-events-none z-20  w-full text-2xl font-semibold leading-snug tracking-tight md:text-4xl"

export default function HeroCard() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType
  return (
    <motion.div
      layout
      layoutId="hero-card"
      className={`relative flex  max-w-5xl flex-col gap-16 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10 ${
        shouldShowIntro ? "items-center" : "min-h-[30rem] items-start"
      }`}
      transition={{
        duration: 1,
        ease,
      }}
    >
      <Poppers />
      {shouldShowIntro ? (
        <motion.div>
          <TextMask layoutId="hero-card-title-1" className={titleClasses}>
            Hello, I'm Mahmoud.
          </TextMask>
          <TextMask layoutId="hero-card-title-2" className={titleClasses}>
            I'm a Fullstack Developer and Educator.
          </TextMask>
        </motion.div>
      ) : (
        <motion.div>
          <motion.h1 layoutId="hero-card-title-1" className={titleClasses}>
            Hello, I'm Mahmoud.
          </motion.h1>
          <motion.h1 layoutId="hero-card-title-2" className={titleClasses}>
            I'm a Fullstack Developer and Educator.
          </motion.h1>
        </motion.div>
      )}
      {!shouldShowIntro && (
        <motion.p
          initial={shouldShowIntro ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 2, ease } }}
          transition={{ delay: 1, duration: 2, ease }}
          className="pointer-events-none z-10 max-w-xl flex-1 text-lg leading-relaxed tracking-wide"
          layoutId="hero-card-description"
          layout="position"
        >
          I have a passion for learning new things, and love seeing ideas come
          to life. I started coding and freelancing web development in 2019.
          Most recently, I worked on{" "}
          <a
            href="https://bountree.app"
            className="pointer-events-auto text-blue-500 hover:underline"
            target="_blank"
          >
            Bountree
          </a>
          . Before that, I was an{" "}
          <a
            target="_blank"
            className="pointer-events-auto text-blue-500 hover:underline"
            href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
          >
            Instructional Associate
          </a>{" "}
          at General Assembly.
        </motion.p>
      )}
      {!shouldShowIntro && (
        <motion.div
          initial="hidden"
          animate="visible"
          // layout="position"
          variants={heroCardVariants}
          className="pointer-events-none relative flex flex-col items-center gap-4 self-center justify-self-end lg:flex-row lg:self-start"
        >
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={heroCardButtonVariants}
            className="pointer-events-auto rounded-full bg-black px-12 py-3 font-medium text-white"
          >
            Contact me
          </motion.button>
          <motion.div
            variants={socialsContainerVariants}
            initial="hidden"
            animate="visible"
            className="pointer-events-auto flex items-center gap-4"
          >
            <SocialButton
              bgColor="white"
              hoverColor="github"
              href="https://github.com/mo-shawa"
            >
              <GithubSVG className="h-5 w-5" />
            </SocialButton>
            <SocialButton
              bgColor="white"
              hoverColor="linkedin"
              href="https://linkedin.com/in/mo-shawa"
            >
              <LinkedInSVG />
            </SocialButton>
            <SocialButton
              bgColor="white"
              hoverColor="twitter"
              href="https://twitter.com/shawa_dev"
            >
              <TwitterSVG />
            </SocialButton>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
