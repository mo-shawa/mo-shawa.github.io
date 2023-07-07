import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence mode="wait">
			<Component {...pageProps} />
		</AnimatePresence>
	)
}
