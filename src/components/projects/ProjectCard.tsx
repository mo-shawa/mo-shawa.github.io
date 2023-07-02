import SocialButton from "../SocialButton"
import GithubSVG from "../../../public/github.svg"
import type projects from "@/data/projects"
import { useContext } from "react"
import { ProjectsContext } from "@/ProjectsContext"
import { gen } from "culler"
import Image from "next/image"

type Props = {
	project: (typeof projects)[0]
	gradient: string
}

export default function ProjectCard({ gradient, project }: Props) {
	const state = useContext(ProjectsContext) as {
		inViewProject: string
	}

	return (
		<div
			className={`w-full aspect-square rounded-3xl bg-gradient-to-br absolute inset-0 h-full overflow-hidden p-4 transition-opacity duration-500 ${
				state.inViewProject === project.name ? "opacity-100" : "opacity-0"
			}`}
			style={{
				background: `linear-gradient( 45deg, ${gen({
					minR: 240,
					minG: 240,
					minB: 240,
					alpha: false,
				})}, ${gen({
					minR: 240,
					minG: 240,
					minB: 240,
					alpha: false,
				})})`,
			}}
		>
			<div className="flex flex-col h-full">
				<div className="flex-1 flex flex-col justify-cente">
					<p className="text-lg flex-1">{project.description}</p>
				</div>
				<div className="flex items-center gap-4">
					<Image
						src={project.image}
						alt={project.name}
						className="rounded w-full h-auto shadow"
						width={800}
						height={600}
					/>
				</div>
			</div>
		</div>
	)
}
