import Image from "next/image"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<main className="mx-4">
			<Navbar />
			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
				<div className="bg-red-500 rounded-3xl h-[30rem] p-10 flex flex-col gap-16 bg-gradient-to-br from-zinc-50 via-orange-50 to-blue-50 ">
					<h1 className="text-4xl font-semibold">
						Hello, I'm Mahmoud, a Frontend-Focused Fullstack Developer.
					</h1>
					<p className="text-lg">
						I have a passion for learning new things, and love seeing ideas come
						to life.
					</p>

					<p className="flex-1">
						I was recently an{" "}
						<a
							className="text-blue-500 hover:underline"
							href="https://generalassemb.ly/instructors/mahmoud-el-shawa/28943"
						>
							Instructional Associate
						</a>{" "}
						at General Assembly.
					</p>

					<div className="flex flex-col lg:flex-row items-center justify-self-end">
						<button className="bg-black text-white font-medium py-3 px-12 rounded-full">
							Contact me
						</button>
						<div>{/** socials */}</div>
					</div>
				</div>
				<div className="bg-[url('/me.webp')] bg-cover bg-center  filter grayscale brightness-125 rounded-3xl h-[30rem]"></div>
			</section>
		</main>
	)
}
