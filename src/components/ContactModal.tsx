import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import {
  contactModalVariants,
  ease,
  socialsContainerVariants,
} from "@/utils/framer"

import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import SocialButton from "./SocialButton"

type Props = {
  setContactModalOpen: (open: boolean) => void
}

export default function ContactModal({ setContactModalOpen }: Props) {
  const [emailCopied, setEmailCopied] = useState(false)
  const copiedText = ["copied!", "👍", "👌", "👏", "🤙", "🤘", "🤞"]

  const copyEmail = () => {
    navigator.clipboard.writeText("mahmoud@shawa.dev")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <motion.div
      onClick={() => setContactModalOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll px-4"
    >
      <motion.div
        key="contact-modal-bg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease,
          },
        }}
        transition={{
          duration: 0.5,
          ease,
        }}
        exit={{ opacity: 0 }}
        onClick={() => setContactModalOpen(false)}
        className="absolute inset-0 bg-black/50 filter backdrop-blur-md"
      />
      <motion.div
        layoutId="contact"
        onClick={(e) => e.stopPropagation()}
        variants={contactModalVariants}
        initial="initial"
        animate="animate"
        style={{
          borderRadius: 40,
          zIndex: 100,
        }}
        transition={{
          layout: {
            duration: 0.5,
            ease,
          },
        }}
        className="relative flex max-w-3xl flex-col gap-4 bg-black p-12 sm:gap-8 lg:bg-scroll"
      >
        <motion.h1
          layout="position"
          layoutId="contact-me-heading"
          className="text-white"
        >
          Contact me
        </motion.h1>

        <motion.p
          layoutId="contact-me-text"
          className="text-lg font-light text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        >
          I&apos;m currently open to new opportunities, so feel free to reach
          out to me if you have any questions or just want to say hi 😁
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}
          className="select-none font-mono text-xs text-white/50"
        >
          In case you prefer to copy/paste my email{" "}
          <motion.span
            onClick={copyEmail}
            className="cursor-pointer select-text font-bold text-white"
          >
            👉 mahmoud@shawa.dev
          </motion.span>
          <AnimatePresence>
            {emailCopied && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="text-white/50"
              >
                {" - "}
                copied!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>

        <div className="flex flex-wrap justify-evenly gap-4 gap-y-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            className="flex items-center"
          >
            <a
              className="flex items-center justify-center gap-2 rounded-3xl px-5 py-3 text-white transition-colors hover:bg-white/20"
              download="Mahmoud_Shawa-Resume"
              href="/resume.pdf"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <motion.path
                  initial={{ stroke: "black", pathLength: 0 }}
                  animate={{ stroke: "white", pathLength: 1 }}
                  transition={{
                    duration: 1,
                    ease,
                    delay: 1.5,
                  }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </a>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <motion.a
              href="mailto:mahmoud@shawa.dev"
              className="flex items-center justify-center gap-2 rounded-3xl px-5 py-3 text-white transition-colors hover:bg-white/20"
            >
              Email me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <motion.path
                  initial={{ stroke: "black", pathLength: 0 }}
                  animate={{ stroke: "white", pathLength: 1 }}
                  transition={{
                    duration: 1,
                    ease,
                    delay: 2,
                  }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </motion.a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setContactModalOpen(false)}
            className="rounded-full bg-white px-12 py-3 font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
