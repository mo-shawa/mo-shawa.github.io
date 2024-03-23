import { motion } from 'framer-motion'
import { useContext } from 'react'

import { IntroContext, IntroContextType } from '@/contexts/introContext'
import {
    contactModalButtonVariants, ease, heroCardVariants, socialsContainerVariants
} from '@/utils/framer'

import GithubSVG from '../../public/github.svg'
import LinkedInSVG from '../../public/linkedin.svg'
import TwitterSVG from '../../public/twitter.svg'
import Poppers from './Poppers'
import SocialButton from './SocialButton'
import TextMask from './TextMask'

const titleClasses =
  "pointer-events-none z-10 w-full text-2xl sm:text-3xl font-semibold leading-snug tracking-tight md:text-4xl lg:whitespace-nowrap "

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
      className={`relative flex h-min max-w-5xl flex-col gap-16 rounded-3xl bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10 ${
        shouldShowIntro ? "items-center" : "min-h-[30rem] items-start"
      }`}
      transition={{
        duration: 1,
        ease,
      }}
    >
      <Poppers />
      {shouldShowIntro ? (
        <motion.div className={titleClasses}>
          <TextMask layoutId="hero-card-title-1">Hi! I&apos;m Joud.</TextMask>
          {/* <TextMask layoutId="hero-card-title-2">
            I&apos;m an undergraduate student and ML enthusiast.
          </TextMask> */}
        </motion.div>
      ) : (
        <motion.div className={titleClasses}>
          <motion.h1 layout="position" layoutId="hero-card-title-1">
            Hi! I&apos;m Joud.
          </motion.h1>
          <motion.h1 layout="position" layoutId="hero-card-title-2">
            {/* I&apos;m an undergraduate student and ML enthusiast. */}
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
          I&apos;m an undergraduate student at Western University pursuing an
          Honors Specialization in Computer Science. I&apos;m set to graduate in
          April 2024, and am passionate about artificial intelligence (AI) and
          its potential to revolutionize the world we live in.
          <br></br>
          <br></br>
          Over the past few years, I have worked on a variety of personal and
          professional projects in AI, check them out below!
          {/* I have a passion for learning new things, and love seeing ideas come
          to life. I started coding and freelancing web development in 2019.
          Most recently, I worked on{" "}
          <a
            href="https://bountree.io"
            className="pointer-events-auto text-blue-500 hover:underline"
            target="_blank"
          >
            Bountree
          </a> */}
          {/* . Before that, I was an{" "}
          <a
            target="_blank"
            className="pointer-events-auto text-blue-500 hover:underline"
            href="https://generalassemb.ly/instructors/joud-el-shawa/28943"
          >
            Instructional Associate
          </a>{" "}
          at General Assembly. */}
        </motion.p>
      )}
      {!shouldShowIntro && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroCardVariants}
          className="pointer-events-none relative flex flex-col items-center gap-4 self-center justify-self-end md:flex-row md:self-start"
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
                  href="https://github.com/joudelshawa"
                >
                  <GithubSVG className="h-5 w-5" />
                </SocialButton>
                <SocialButton
                  bgColor="white"
                  hoverColor="linkedin"
                  href="https://linkedin.com/in/joudelshawa"
                >
                  <LinkedInSVG />
                </SocialButton>
                {/* <SocialButton
                  bgColor="white"
                  hoverColor="twitter"
                  href="https://twitter.com/shawa_dev"
                >
                  <TwitterSVG />
                </SocialButton> */}
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
