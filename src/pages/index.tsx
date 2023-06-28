import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import SocialButton from '@/components/SocialButton'
import GithubSVG from '../../public/github.svg'
import LinkedInSVG from '../../public/linkedin.svg'
import TwitterSVG from '../../public/twitter.svg'
import projects from '@/projects'
import ProjectPreview from '@/components/ProjectPreview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className="mx-4">
			<Navbar />
			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
				<div className="bg-red-500 rounded-3xl min-h-[30rem] p-10 flex flex-col gap-16 bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 ">
					<h1 className="text-4xl font-semibold tracking-tight leading-snug">
						Hello, I'm Mahmoud - a Frontend-Focused Fullstack Developer.
					</h1>
					<p className="text-lg flex-1 ">
						I have a passion for learning new things, and love seeing ideas come
						to life. Most recently, I worked on{' '}
						<a
							href="https://bountree.app"
							className="text-blue-500 hover:underline"
							target="_blank"
						>
							Bountree
						</a>
						. Before that, I was an{' '}
						<a
							target="_blank"
							className="text-blue-500 hover:underline"
							href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
						>
							Instructional Associate
						</a>{' '}
						at General Assembly.
					</p>

					<div className="flex flex-col lg:flex-row items-center justify-self-end gap-4">
						<button className="bg-black text-white font-medium py-3 px-12 rounded-full">
							Contact me
						</button>
						<div className="flex items-center gap-4">
							<SocialButton
								bgColor="github"
								href="#"
							>
								<GithubSVG className="h-5 w-5" />
							</SocialButton>
							<SocialButton
								bgColor="linkedin"
								href="#"
							>
								<LinkedInSVG />
							</SocialButton>
							<SocialButton
								bgColor="twitter"
								href="#"
							>
								<TwitterSVG />
							</SocialButton>
						</div>
					</div>
				</div>
				<div className="bg-[url('/me2.jpeg')] bg-cover bg-center  filter saturate-50 grayscale brightness-125 rounded-3xl h-[30rem] hover:grayscale-0 hover:brightness-100 transition-all duration-500 hover:rounded-lg hover:shadow-xl"></div>
			</section>
			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
				{projects.map((project) => (
					<ProjectPreview
						key={project.name}
						{...project}
					/>
				))}
			</section>
		</main>
	)
}
