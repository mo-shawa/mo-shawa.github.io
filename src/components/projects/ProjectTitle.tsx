import { useInView } from "framer-motion"
import { useRef } from "react"
import { useContext, useEffect } from "react"
import { ProjectsDispatchContext } from "@/ProjectsContext"
import { ProjectsContext } from "@/ProjectsContext"

type Props = {
	name: string
	children: React.ReactNode
}

export default function ProjectTitle({ children, name }: Props) {
	const ref = useRef<HTMLParagraphElement>(null)
	const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

	const state = useContext(ProjectsContext) as {
		inViewProject: string
	}

	const dispatch = useContext(ProjectsDispatchContext) as React.Dispatch<{
		type: string
		payload: string | null
	}>

	useEffect(() => {
		if (isInView) dispatch({ type: "SET_IN_VIEW_PROJECT", payload: name })
		if (!isInView && state.inViewProject === name)
			dispatch({ type: "SET_IN_VIEW_PROJECT", payload: null })
	}, [isInView, name, dispatch, state.inViewProject])

	return (
		<p
			ref={ref}
			className={`text-5xl py-16 transition-colors ${
				isInView ? "text-black" : "text-zinc-300"
			}`}
		>
			{children}
		</p>
	)
}
