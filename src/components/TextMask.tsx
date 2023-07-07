import { AnimationProps, motion } from "framer-motion"

type TextMaskProps = {
	children: string
	className?: string
	delay?: number
}

export default function TextMask({
	children,
	className,
	delay = 0,
}: TextMaskProps) {
	const textMaskVariants: AnimationProps["variants"] = {
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
				delay,
				staggerChildren: 0.05,
				duration: 0.5,
				ease: [0.6, 0.01, 0.05, 0.95],
			},
		},
	}

	const textMaskChildVariants: AnimationProps["variants"] = {
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
	return (
		<motion.div
			className={`relative overflow-hidden ${className}`}
			initial="hidden"
			animate="visible"
			variants={textMaskVariants}
		>
			{children.split(" ").map((child, i) => (
				<>
					<motion.span
						key={i}
						variants={textMaskChildVariants}
						className="inline-block"
					>
						{child}
					</motion.span>
					<span> </span>
				</>
			))}
		</motion.div>
	)
}
