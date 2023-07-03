import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import SocialButton from "@/components/SocialButton"
import GithubSVG from "../../public/github.svg"
import LinkedInSVG from "../../public/linkedin.svg"
import TwitterSVG from "../../public/twitter.svg"
import projects from "@/data/projects"
import { motion, useScroll, useSpring } from "framer-motion"
import ProjectTitle from "@/components/projects/ProjectTitle"
import ProjectCard from "@/components/projects/ProjectCard"
import ExpandButton from "@/components/projects/ExpandButton"

export default function Home() {
	const { scrollY } = useScroll()

	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 max-w-7xl mx-auto ">
				<>
					<div className=" rounded-3xl min-h-[30rem] p-10 flex flex-col gap-16 bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 ">
						<h1 className="text-5xl font-semibold tracking-tight leading-snug">
							Hello, I'm Mahmoud.
						</h1>
						<h1 className="text-3xl font-semibold tracking-tight leading-snug">
							I'm a Frontend-Focused Fullstack Developer.
						</h1>
						<p className="text-lg ">
							I have a passion for learning new things, and love seeing ideas
							come to life. Most recently, I worked on{" "}
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
										duration: 0.5,
										ease: [0.6, 0.01, 0.05, 0.95],
									},
								}}
								className="bg-black text-white font-medium py-3 px-12 rounded-full"
							>
								Contact me
							</motion.button>
							<div className="flex items-center gap-4">
								<SocialButton
									bgColor="github"
									href="https://github.com/mo-shawa"
								>
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
					<div className="bg-[url('/me2.jpeg')] bg-cover bg-center  filter saturate-[0.8] grayscale brightness-125 rounded-3xl h-[30rem] hover:grayscale-0 hover:brightness-100 transition-all duration-500 hover:rounded-lg hover:shadow-xl"></div>
				</>
			</section>
			<section className="w-full max-w-7xl mx-auto">
				<motion.h1
					style={{ translateX: scrollY }}
					className=" text-7xl font-semibold tracking-tight leading-snug"
				>
					Projects
				</motion.h1>

				<div className="flex lg:flex-row flex-col w-full gap-20 items-start">
					<ul className="w-full py-[50vh]">
						{projects.map((project, idx) => (
							<li key={idx}>
								<ProjectTitle name={project.name}>{project.name}</ProjectTitle>
							</li>
						))}
					</ul>
					<div className="w-full sticky bottom:0 lg:top-0 h-screen flex items-center">
						<div className="relative w-full  rounded-3xl bg-gray-100">
							{projects.map((project, idx) => (
								<ProjectCard key={idx} project={project} />
							))}
							<ExpandButton />
						</div>
					</div>
				</div>
			</section>
			<section className="h-screen bg-red-50"></section>
		</>
	)
}
