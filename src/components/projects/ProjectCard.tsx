import SocialButton from "../SocialButton"
import GithubSVG from "../../../public/github.svg"
import type projects from "@/data/projects"
import { useContext } from "react"
import { ProjectsContext } from "@/ProjectsContext"

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
			className={`w-full aspect-square rounded-3xl bg-gradient-to-br absolute inset-0 h-full overflow-hidden p-4 transition-opacity ${gradient} ${
				state.inViewProject === project.name ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className="flex flex-col h-full">
				<div className="flex-1 flex flex-col justify-center">
					<p className="text-lg flex-1 ">{project.description}</p>
				</div>
				<div className="flex items-center gap-4">
					<SocialButton bgColor="github" href={project.github}>
						<GithubSVG className="h-5 w-5" />
					</SocialButton>
				</div>
			</div>
		</div>
	)
}
