import { Dispatch, SetStateAction, createContext } from "react"

export const DataContext = createContext<DataContextType | null>(null)

export type DataContextType = {
  currentDataSource: "projects" | "milestones"
  setCurrentDataSource: Dispatch<SetStateAction<"projects" | "milestones">>
}
