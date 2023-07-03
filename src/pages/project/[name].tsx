import { useRouter } from "next/router"
import { useEffect, useContext, useState } from "react"
import { ProjectsContext } from "@/ProjectsContext"
import { ProjectReducerState } from "@/ProjectsReducer"
import Image from "next/image"
import { gen } from "culler"

export default function Project() {
	const router = useRouter()
	const { projects } = useContext(ProjectsContext) as ProjectReducerState
	const [project, setProject] = useState<(typeof projects)[0]>()

	const gradient = `linear-gradient( 45deg, ${gen({
		minR: 240,
		minG: 240,
		minB: 240,
		alpha: false,
	})}, ${gen({ minR: 240, minG: 240, minB: 240, alpha: false })})`

	useEffect(() => {
		if (router.isReady) {
			const foundProject = projects.find(
				(project) => project.name === router.query.name
			)
			setProject(foundProject)
		}
	}, [router.isReady])

	if (!project) return null

	return (
		<section
			className="w-full max-w-7xl mx-auto"
			style={{
				background: gradient,
			}}
		>
			<div className="flex flex-col  w-full h-screen">
				<h1 className="text-6xl font-bold text-gray-800">{project?.name}</h1>
				<p className="mt-2  text-gray-600">{project?.description}</p>

				<div className="flex flex-col items-center justify-center w-full mt-8">
					<Image
						src={project!.image}
						alt={project!.name}
						width={500}
						height={650}
						className="rounded-lg"
					/>
				</div>
			</div>
		</section>
	)
}
