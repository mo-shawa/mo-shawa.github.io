import { techPillVariants } from "@/utils/framer"
import { motion } from "framer-motion"

export default function Pill({ children }: { children: string }) {
  const pillStyle = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-gray-100 text-gray-800",
    "bg-slate-100 text-slate-800",
    "bg-amber-100 text-amber-800",
    "bg-emerald-100 text-emerald-800",
    "bg-teal-100 text-teal-800",
    "bg-cyan-100 text-cyan-800",
    "bg-lightBlue-100 text-lightBlue-800",
    "bg-violet-100 text-violet-800",
    "bg-fuchsia-100 text-fuchsia-800",
    "bg-rose-100 text-rose-800",
    "bg-orange-100 text-orange-800",
    "bg-lime-100 text-lime-800",
  ]

  const randomIndex = Math.floor(Math.random() * pillStyle.length)

  return (
    <motion.div
      variants={techPillVariants}
      animate="visible"
      initial="hidden"
      className={`whitespace-nowrap rounded-full px-4 py-1 text-sm font-semibold ${pillStyle[randomIndex]}`}
    >
      {children}
    </motion.div>
  )
}
