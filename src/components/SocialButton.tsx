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
		<a
			href={href}
			target="_blank"
			className={`h-10 w-10 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center group`}
		>
			<div className="fill-black transition-colors duration-200 ease-in group-hover:fill-white object-">
				{children}
			</div>
		</a>
	)
}

type SocialButtonProps = {
	href: string
	children?: React.ReactNode
	bgColor?: string
}
