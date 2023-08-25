import { motion } from "framer-motion"
import Poppers from "./Poppers"
import TextMask from "./TextMask"
import {
  ease,
  heroCardVariants,
  socialsContainerVariants,
  contactModalButtonVariants,
} from "@/utils/framer"
import SocialButton from "./SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import { IntroContext, IntroContextType } from "@/contexts/introContext"
import { useContext } from "react"

const titleClasses =
  "pointer-events-none z-10 w-full text-2xl font-semibold leading-snug tracking-tight md:text-4xl"

type Props = {
  contactModalOpen: boolean
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeroCard({
  contactModalOpen,
  setContactModalOpen,
}: Props) {
  const { shouldShowIntro } = useContext(IntroContext) as IntroContextType

  return (
    <motion.div
      layout
      layoutId="hero-card"
      className={`relative flex max-w-5xl flex-col gap-16 rounded-3xl bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10 ${
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
            Hello, I&apos;m Mahmoud.
          </TextMask>
          <TextMask layoutId="hero-card-title-2" className={titleClasses}>
            I&apos;m a Fullstack Developer and Educator.
          </TextMask>
        </motion.div>
      ) : (
        <motion.div className={titleClasses}>
          <motion.h1 layoutId="hero-card-title-1" className={titleClasses}>
            Hello, I&apos;m Mahmoud.
          </motion.h1>
          <motion.h1 layoutId="hero-card-title-2" className={titleClasses}>
            I&apos;m a Fullstack Developer and Educator.
          </motion.h1>
        </motion.div>
      )}
      {!shouldShowIntro && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 2, ease } }}
          transition={{ delay: 1, duration: 1, ease }}
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
          {!contactModalOpen && (
            <>
              <motion.div
                layoutId="contact"
                onClick={() => setContactModalOpen(true)}
                whileHover="hover"
                whileTap="tap"
                variants={contactModalButtonVariants}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                className="pointer-events-auto z-20 cursor-pointer rounded-3xl bg-black px-12 py-3 font-medium text-white"
              >
                <motion.h1 layout="position" layoutId="contact-me-heading">
                  Contact me
                </motion.h1>
              </motion.div>
              <motion.div
                layoutId="contact-me-links"
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
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
