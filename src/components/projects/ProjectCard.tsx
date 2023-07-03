import type projects from "@/data/projects"
import { useContext } from "react"
import { ProjectsContext } from "@/ProjectsContext"
import { gen } from "culler"
import Image from "next/image"
import { ProjectReducerState } from "@/ProjectsReducer"

type Props = {
	project: (typeof projects)[0]
}

export default function ProjectCard({ project }: Props) {
	const state = useContext(ProjectsContext) as ProjectReducerState

	const gradient = `linear-gradient( 45deg, ${gen({
		minR: 240,
		minG: 240,
		minB: 240,
		alpha: false,
	})}, ${gen({ minR: 240, minG: 240, minB: 240, alpha: false })})`

	return (
		<div
			className={`flex flex-col gap-4 w-full h-full rounded-3xl bg-gradient-to-br absolute inset-0 p-4 transition-opacity ${
				state.inViewProject === project.name ? "opacity-100" : "opacity-0"
			}`}
			style={{
				background: gradient,
			}}
		>
			<Image
				src={project.image}
				alt={project.name}
				className="rounded w-full h-auto shadow"
				width={600}
				height={400}
			/>
			<p className="text-lg">{project.description}</p>
		</div>
	)
}
