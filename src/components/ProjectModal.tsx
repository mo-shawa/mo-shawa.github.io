import SocialButton from "./SocialButton"

type Props = {
	selected: Project | null
	setSelected: React.Dispatch<React.SetStateAction<Project | null>>
}

export default function ProjectModal({ selected, setSelected }: Props) {
	if (!selected) return <></>

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 bg-white rounded-3xl p-10 flex flex-col gap-4">
				<h1 className="text-4xl font-semibold tracking-tight leading-snug">
					{selected.name}
				</h1>
				<p className="text-lg flex-1">{selected.description}</p>
				<div className="relative flex flex-col lg:flex-row items-center justify-self-end gap-4">
					<button className="bg-black text-white font-medium py-3 px-12 rounded-full">
						Visit
					</button>
					<div className="flex items-center gap-4">
						<SocialButton href={selected.github} hoverColor="github" />
					</div>
				</div>
			</div>
		</div>
	)
}
