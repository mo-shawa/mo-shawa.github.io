import { Dispatch, SetStateAction, createContext } from "react"

export const DataContext = createContext<DataContextType | null>(null)

export type DataContextType = {
  currentDataSource: "projects" | "testimonials"
  setCurrentDataSource: Dispatch<SetStateAction<"projects" | "testimonials">>
}
