import projects from "@/data/projects"
import GithubSVG from "../../public/github.svg"
import { AnimationProps, motion, useInView } from "framer-motion"
import SocialButton from "./SocialButton"
import Image from "next/image"
import { gen } from "culler"

type ProjectPreviewProps = Project & {
	bgColor?: string
	dark?: boolean
	isEven?: boolean
}

export default function ProjectPreview({
	name,
	description,
	github,
	deployment,
	image,
	isEven,
}: ProjectPreviewProps) {
	const gradient = `linear-gradient(to bottom right, ${gen({
		type: "rgb",
		minB: 242,
		minG: 242,
		minR: 242,
	})}, ${gen({
		type: "rgb",
		minB: 242,
		minG: 242,
		minR: 242,
	})})`

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
				className={`h-full w-full relative bg-center bg-fixed lg:bg-scroll bg-contain bg-no-repeat rounded-2xl`}
			>
				<div
					className={` px-10 py-6 rounded-t-lg`}
					style={{
						background: gradient,
					}}
				>
					<h2 className="font-medium text-lg">{name}</h2>
					<p className="text-sm ">{description}</p>
					<div
						className="flex flex-col justify-evenly absolute right-0 bottom-0 gap-4  filter backdrop-blur-lg shadow p-6 rounded-tl-3xl"
						style={{ background: gradient }}
					>
						<SocialButton href={github} hoverColor="github">
							<GithubSVG />
						</SocialButton>
						<SocialButton hoverColor="github" href={deployment}>
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
					className="aspect-[4/3] w-full rounded-b-3xl"
					src={image}
					alt={name}
					width={993}
					height={745}
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
