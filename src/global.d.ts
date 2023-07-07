import projects from "./data/projects"

// export {}

declare global {
	type Project = (typeof projects)[number]
}
