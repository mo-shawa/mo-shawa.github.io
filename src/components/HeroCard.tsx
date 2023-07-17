import { motion } from "framer-motion"
import Poppers from "./Poppers"
import TextMask from "./TextMask"
import { buttonVariants, ease } from "@/utils/framer"
import SocialButton from "./SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { useContext } from "react"

export default function HeroCard() {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType

  return (
    <motion.div
      layoutId="hero-card"
      className="relative flex min-h-[30rem] max-w-5xl flex-col gap-16 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10"
      transition={{
        duration: 1,
        ease,
      }}
    >
      <Poppers />
      <TextMask
        layoutId="hero-card-title"
        className="mix pointer-events-none text-4xl font-semibold leading-snug tracking-tight"
      >
        Hello, I'm Mahmoud. I'm a Frontend-Focused Fullstack Developer.
      </TextMask>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pointer-events-none z-10 flex-1 text-lg"
      >
        I have a passion for learning new things, and love seeing ideas come to
        life. Most recently, I worked on{" "}
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

      {!shouldShowIntro && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="pointer-events-none relative flex flex-col items-center gap-4 justify-self-end lg:flex-row"
        >
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="pointer-events-auto rounded-full bg-black px-12 py-3 font-medium text-white"
          >
            Contact me
          </motion.button>
          <motion.div className="pointer-events-auto flex items-center gap-4">
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
