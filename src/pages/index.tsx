import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import SocialButton from "@/components/SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import projects from "@/projects"
import ProjectPreview from "@/components/ProjectPreview"
import { AnimationProps, motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
	return (
		<main className={`mx-4 ${plusJakartaSans.className}`}>
			<Navbar />
			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
				<div className="bg-red-500 rounded-3xl min-h-[30rem] p-10 flex flex-col gap-16 bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 ">
					<h1 className="text-4xl font-semibold tracking-tight leading-snug">
						Hello, I'm Mahmoud. <br /> I'm a Frontend-Focused Fullstack
						Developer.
					</h1>
					<p className="text-lg flex-1 ">
						I have a passion for learning new things, and love seeing ideas come
						to life. Most recently, I worked on{" "}
						<a
							href="https://bountree.app"
							className="text-blue-500 hover:underline"
							target="_blank"
						>
							Bountree
						</a>
						. Before that, I was an{" "}
						<a
							target="_blank"
							className="text-blue-500 hover:underline"
							href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
						>
							Instructional Associate
						</a>{" "}
						at General Assembly.
					</p>

					<div className="flex flex-col lg:flex-row items-center justify-self-end gap-4">
						<motion.button
							whileHover={{
								scale: 1.05,
								transition: {
									duration: 0.5,
									ease: [0.6, 0.01, 0.05, 0.95],
								},
							}}
							whileTap={{
								scale: 0.95,
								transition: {
									ease: [0.6, 0.01, 0.05, 0.95],
								},
							}}
							className="bg-black text-white font-medium py-3 px-12 rounded-full"
						>
							Contact me
						</motion.button>
						<div className="flex items-center gap-4">
							<SocialButton bgColor="github" href="https://github.com/mo-shawa">
								<GithubSVG className="h-5 w-5" />
							</SocialButton>
							<SocialButton
								bgColor="linkedin"
								href="https://linkedin.com/in/mo-shawa"
							>
								<LinkedInSVG />
							</SocialButton>
							<SocialButton
								bgColor="twitter"
								href="https://twitter.com/shawa_dev"
							>
								<TwitterSVG />
							</SocialButton>
						</div>
					</div>
				</div>
				<div className="bg-[url('/me2.jpeg')] bg-cover bg-center  filter saturate-50 grayscale brightness-125 rounded-3xl h-[30rem] hover:grayscale-0 hover:brightness-100 transition-all duration-500 hover:rounded-lg hover:shadow-xl"></div>
			</section>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-4"
			>
				{projects.map((project, idx) => (
					<ProjectPreview
						key={project.name}
						{...project}
						isEven={idx % 2 === 0}
					/>
				))}
			</motion.section>
		</main>
	)
}

const containerVariants: AnimationProps["variants"] = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
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
