import projects from "@/projects"
import GithubSVG from "../../public/github.svg"
import { AnimationProps, motion, useInView } from "framer-motion"
import { useRef } from "react"
import SocialButton from "./SocialButton"
import Image from "next/image"

type ProjectPreviewProps = (typeof projects)[0] & {
	bgColor?: string
	dark?: boolean
	isEven?: boolean
}

export default function ProjectPreview({
	name,
	description,
	technologies,
	github,
	deployment,
	image,
	tags,
	isEven,
}: ProjectPreviewProps) {
	return (
		<motion.div
			className={`h-[30rem] rounded-3xl overflow-hidden `}
			variants={projectPreviewVariants}
			initial="hidden"
			whileHover={{
				y: -10,
				transition: {
					ease: [0.6, 0.01, 0.05, 0.95],
					delay: isEven ? 0.2 : 0,
				},
			}}
			whileInView="visible"
		>
			<div
				className={`h-full w-full relative bg-center bg-fixed lg:bg-scroll bg-contain bg-no-repeat rounded-2xl `}
				// style={{ backgroundImage: `url(${image})` }}
			>
				<div
					className={`bg-gradient-to-br from-blue-50 via-white to-red-50  filter backdrop-blur-md saturate-150 px-10 py-6 rounded-t-lg`}
				>
					<h2 className="font-medium text-lg">{name}</h2>
					<p className="text-sm max-w-[85%]">{description}</p>
					<div className="flex flex-col justify-evenly absolute right-4 bottom-0 h-full">
						<SocialButton href={github} bgColor="github">
							<GithubSVG />
						</SocialButton>
						<SocialButton bgColor="github" href={deployment}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-6 h-6"
							>
								<path
									fillRule="evenodd"
									d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
									clipRule="evenodd"
								/>
							</svg>
						</SocialButton>
					</div>
				</div>
				<Image
					className="aspect-[4/3] w-full"
					src={image}
					alt={name}
					width={600}
					height={450}
				/>
			</div>
		</motion.div>
	)
}
const projectPreviewVariants: AnimationProps["variants"] = {
	hidden: {
		opacity: 0,
		y: 30,
		scale: 0.98,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: [0.6, 0.01, 0.05, 0.95],
		},
	},
}
