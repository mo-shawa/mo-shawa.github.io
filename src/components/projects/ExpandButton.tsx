import { useContext } from "react"
import { ProjectsContext } from "@/ProjectsContext"
import { motion } from "framer-motion"
import { ProjectReducerState } from "@/ProjectsReducer"
import { useRouter } from "next/router"

export default function ExpandButton() {
	const state = useContext(ProjectsContext) as ProjectReducerState
	const router = useRouter()
	return (
		<motion.button
			onClick={() => {
				if (state.inViewProject === null) return
				router.push(`/project/${state.inViewProject}`)
			}}
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			className={`bg-black text-white rounded-xl absolute -bottom-14 right-0 px-4 py-2 shadow-lg ${
				state.inViewProject === null ? "hidden" : "block"
			}`}
		>
			Expand
		</motion.button>
	)
}
