import { createContext } from "react"
import { state, dispatch } from "@/reducers/introReducer"

export const IntroContext = createContext<typeof state>(null)

export const IntroDispatchContext = createContext<typeof dispatch>(null)
