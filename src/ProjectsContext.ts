import { createContext, Dispatch } from "react"
import { ProjectReducerState, ProjectReducerAction } from "./ProjectsReducer"

export const ProjectsContext = createContext<ProjectReducerState | null>(null)
export const ProjectsDispatchContext =
	createContext<Dispatch<ProjectReducerAction> | null>(null)
