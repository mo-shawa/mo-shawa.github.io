import projects from "@/projects"

type ProjectPreviewProps = {
	project: (typeof projects)[0]
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
	return <div>Project Preview</div>
}
