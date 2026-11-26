import { motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'

import { IntroContext, IntroContextType } from '@/contexts/introContext'
import {
  contactModalButtonVariants,
  ease,
  heroCardVariants,
  socialsContainerVariants,
} from '@/utils/framer'

import GithubSVG from '../../public/github.svg'
import LinkedInSVG from '../../public/linkedin.svg'
import Poppers from './Poppers'
import SocialButton from './SocialButton'
import TextMask from './TextMask'

const titleClasses =
  'pointer-events-none w-full text-2xl sm:text-3xl font-semibold leading-snug tracking-tight md:text-4xl lg:whitespace-nowrap'

type Props = {
  contactModalOpen: boolean
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeroCard({
  contactModalOpen,
  setContactModalOpen,
}: Props) {
  const { shouldShowIntro, introComplete } = useContext(
    IntroContext
  ) as IntroContextType
  const cardRef = useRef<HTMLDivElement>(null)

  // The 400 hover cells are only an idle hover effect. Mounting them during
  // the intro morph adds ~800 DOM operations to the swap commit and puts them
  // inside the layer that is being rescaled every frame, so mount them once
  // the intro choreography has settled.
  const [showPoppers, setShowPoppers] = useState(introComplete)
  useEffect(() => {
    if (shouldShowIntro || showPoppers) return
    // After the projects grid has mounted and finished its entrance.
    const id = window.setTimeout(() => setShowPoppers(true), 4000)
    return () => window.clearTimeout(id)
  }, [shouldShowIntro, showPoppers])

  // While the layout morph runs, Framer rescales this card every frame.
  // will-change makes Chrome rasterize it once and scale the texture on the
  // compositor instead of re-rasterizing the whole card each frame. Removed
  // afterwards so the card is re-rasterized crisply at its final size.
  const setWillChange = (value: 'transform' | 'auto') => {
    if (cardRef.current) cardRef.current.style.willChange = value
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      layoutId="hero-card"
      onLayoutAnimationStart={() => setWillChange('transform')}
      onLayoutAnimationComplete={() => setWillChange('auto')}
      // Radius in style (not a class) so Framer can scale-correct it.
      style={{ borderRadius: 24 }}
      className={`relative flex max-w-5xl flex-col gap-12 bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 p-10 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-indigo-950/60 ${
        shouldShowIntro ? 'items-center' : 'min-h-[33vh] items-start'
      }`}
      transition={{
        duration: 1,
        ease,
      }}
    >
      {!shouldShowIntro && showPoppers && <Poppers />}
      {shouldShowIntro ? (
        <motion.div className={titleClasses}>
          <TextMask layoutId="hero-card-title-1">
            Hello, I&apos;m Mahmoud.
          </TextMask>
          <TextMask layoutId="hero-card-title-2">
            I&apos;m a Fullstack Engineer.
          </TextMask>
        </motion.div>
      ) : (
        <motion.div className={titleClasses}>
          <motion.h1 layout="position" layoutId="hero-card-title-1">
            Hello, I&apos;m Mahmoud.
          </motion.h1>
          <motion.h1 layout="position" layoutId="hero-card-title-2">
            I&apos;m a Fullstack Engineer.
          </motion.h1>
        </motion.div>
      )}
      {!shouldShowIntro && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 2, ease } }}
          transition={{ delay: 1, duration: 1, ease }}
          className="pointer-events-none z-10 max-w-xl flex-1 text-lg font-normal leading-relaxed tracking-wide"
        >
          I enjoy problem solving and making ideas come to life.
          <br />
          <br />
          I&apos;m a Fullstack Engineer at{' '}
          <a
            href="https://nexxt.in"
            className="pointer-events-auto text-blue-500 hover:underline dark:text-blue-400"
            target="_blank"
          >
            Nexxt Intelligence
          </a>
          . I was previously Lead Developer at{' '}
          <a
            href="https://goodable.co"
            className="pointer-events-auto text-blue-500 hover:underline dark:text-blue-400"
            target="_blank"
          >
            Goodable
          </a>
          , and 2x Founding Engineer, most recently at{' '}
          <a
            href="https://callmi.co"
            className="pointer-events-auto text-blue-500 hover:underline dark:text-blue-400"
            target="_blank"
          >
            Callmi
          </a>{' '}
          (acquired by{' '}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7197098591293759488/"
            className="pointer-events-auto text-blue-500 hover:underline dark:text-blue-400"
            target="_blank"
          >
            Brinc
          </a>
          ).
          <br /> Before that, I was an{' '}
          <a
            target="_blank"
            className="pointer-events-auto text-blue-500 hover:underline dark:text-blue-400"
            href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
          >
            Instructional Associate
          </a>{' '}
          at General Assembly.
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
                style={{
                  borderRadius: 40,
                }}
                className="pointer-events-auto relative z-20 cursor-pointer bg-black px-12 py-3 font-medium text-white"
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
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
