import { motion } from "framer-motion"
import HeroCard from "./HeroCard"
import { ease } from "@/utils/framer"
import { useContext } from "react"
import { IntroContext, IntroContextType } from "@/contexts/introContext"

type Props = {
  contactModalOpen: boolean
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Loader({
  contactModalOpen,
  setContactModalOpen,
}: Props) {
  const { setShouldShowIntro } = useContext(IntroContext) as IntroContextType

  return (
    <motion.div
      animate={{ opacity: 1 }}
      onAnimationComplete={() => setShouldShowIntro(false)}
      transition={{ duration: 2, ease }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll px-4"
    >
      <HeroCard
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
      />
    </motion.div>
  )
}
