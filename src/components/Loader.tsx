import { motion } from "framer-motion"
import HeroCard from "./HeroCard"
import { ease } from "@/utils/framer"
import { useContext } from "react"
import { IntroDispatchContext } from "@/contexts/introContext"

export default function Loader() {
  const dispatch = useContext(IntroDispatchContext)

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      onAnimationComplete={() =>
        dispatch({ type: "SET_LOADING", payload: false })
      }
      transition={{ duration: 4, ease }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll px-4"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <HeroCard />
    </motion.div>
  )
}
