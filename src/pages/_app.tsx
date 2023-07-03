import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useReducer } from "react"
import { reducer, initialState } from "@/ProjectsReducer"
import { ProjectsContext, ProjectsDispatchContext } from "@/ProjectsContext"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<ProjectsContext.Provider value={state}>
			<ProjectsDispatchContext.Provider value={dispatch}>
				<AnimatePresence mode="wait">
					<main className={`mx-4 pt-16 ${plusJakartaSans.className}`}>
						<Navbar />
						<Component {...pageProps} />
					</main>
				</AnimatePresence>
			</ProjectsDispatchContext.Provider>
		</ProjectsContext.Provider>
	)
}
