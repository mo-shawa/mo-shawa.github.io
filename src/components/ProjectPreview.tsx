import projects from "@/projects"
import GithubSVG from "../../public/github.svg"
import { motion } from "framer-motion"

type ProjectPreviewProps = (typeof projects)[0] & {
	bgColor?: string
}

export default function ProjectPreview({
	name,
	description,
	technologies,
	github,
	deployment,
	image,
	tags,
	bgColor = "#e2e2e2",
}: ProjectPreviewProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 30,
				scale: 0.9,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: 0.8,
					ease: [0.6, 0.01, 0.05, 0.95],
				},
			}}
			viewport={{
				once: true,
			}}
			className={`h-[30rem] rounded-3xl overflow-hidden `}
			style={{ background: bgColor }}
		>
			<div
				className={`h-full w-full px-10 py-6 transition-all duration-500 hover:scale-105 ease-in-out bg-cover filter relative group`}
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="bg-zinc-50">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				<div>
					<GithubSVG />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</motion.div>
	)
}
