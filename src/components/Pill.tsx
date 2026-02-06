import { techPillVariants } from '@/utils/framer'
import { motion } from 'framer-motion'

export default function Pill({ children }: { children: string }) {
  const pillStyle = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
    'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
    'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
    'bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-300',
    'bg-slate-100 text-slate-800 dark:bg-slate-800/40 dark:text-slate-300',
    'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
    'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',
    'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
    'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
    'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
    'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
    'bg-lime-100 text-lime-800 dark:bg-lime-900/40 dark:text-lime-300',
  ]

  const randomIndex = Math.floor(Math.random() * pillStyle.length)

  return (
    <motion.div
      variants={techPillVariants}
      className={`pill whitespace-nowrap rounded-full px-4 py-1 text-sm font-semibold ${pillStyle[randomIndex]}`}
    >
      {children}
    </motion.div>
  )
}
