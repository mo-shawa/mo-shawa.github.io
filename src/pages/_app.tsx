import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useReducer } from "react"
import { reducer, initialState } from "@/ProjectsReducer"
import { ProjectsContext, ProjectsDispatchContext } from "@/ProjectsContext"

export default function App({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<ProjectsContext.Provider value={state}>
			<ProjectsDispatchContext.Provider value={dispatch}>
				<Component {...pageProps} />
			</ProjectsDispatchContext.Provider>
		</ProjectsContext.Provider>
	)
}
