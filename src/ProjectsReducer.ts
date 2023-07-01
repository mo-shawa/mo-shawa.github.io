import projects from "@/data/projects"
import { Reducer } from "react"

export type ProjectReducerState = {
	inViewProject: string | null
	projects: typeof projects
}
export type ProjectReducerAction = {
	type: "SET_IN_VIEW_PROJECT"
	payload: string | null
}

export const initialState = {
	inViewProject: null,
	projects: projects,
}

export const reducer: Reducer<ProjectReducerState, ProjectReducerAction> = (
	state,
	action
) => {
	switch (action.type) {
		case "SET_IN_VIEW_PROJECT":
			return {
				...state,
				inViewProject: action.payload,
			}
		default:
			return state
	}
}
