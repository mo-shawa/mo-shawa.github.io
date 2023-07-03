import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full filter backdrop-blur-lg backdrop-saturate-150 py-4 px-4 z-10">
			<div className="max-w-7xl mx-auto flex justify-between">
				<div className="flex items-center gap-2">
					<div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
					<span className="text-sm font-semibold tracking-widest">
						SHAWA.DEV
					</span>
				</div>
				<div className="flex gap-12 text-md mix-blend-exclusion text-zinc-400">
					<Link className="text-black font-medium" href="#">
						Home
					</Link>
					<Link href="#"> Projects </Link>
					<Link href="#"> Contact </Link>
				</div>
			</div>
		</nav>
	)
}
