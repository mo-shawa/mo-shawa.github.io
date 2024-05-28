import { createContext, Dispatch, SetStateAction } from "react"

export const IntroContext = createContext<IntroContextType | null>(null)

export type IntroContextType = {
  shouldShowIntro: boolean
  setShouldShowIntro: Dispatch<SetStateAction<boolean>>
}
