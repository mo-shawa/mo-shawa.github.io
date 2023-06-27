import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="filter backdrop-blur-lg py-4">
			<div className="max-w-7xl mx-auto flex justify-between">
				<div className="flex items-center gap-2">
					<div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
					<span className="text-sm font-semibold tracking-widest">
						PORTFOLIO
					</span>
				</div>
				<div className="flex gap-12 text-md text-zinc-400">
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
