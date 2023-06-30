import { motion } from "framer-motion"

export default function SocialButton({
	href,
	children,
	bgColor = "black",
}: SocialButtonProps) {
	let bgHoverColorClass

	switch (bgColor) {
		case "github":
			bgHoverColorClass = "hover:bg-github"
			break
		case "twitter":
			bgHoverColorClass = "hover:bg-twitter"
			break
		case "linkedin":
			bgHoverColorClass = "hover:bg-linkedin"
			break
	}

	return (
		<motion.a
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.95,
			}}
			href={href}
			target="_blank"
			className={`h-10 w-10 bg-white ${bgHoverColorClass} rounded-full duration-200 ease-in-out flex justify-center items-center group border shadow-sm hover:shadow-md transition-all`}
		>
			<div className="fill-black transition-colors duration-200 ease-in group-hover:fill-white object-">
				{children}
			</div>
		</motion.a>
	)
}

type SocialButtonProps = {
	href: string
	children?: React.ReactNode
	bgColor?: string
}
