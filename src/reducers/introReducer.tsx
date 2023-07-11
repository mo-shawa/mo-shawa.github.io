import { useReducer } from "react"
type IntroAction = {
  type: "PLAY_INTRO" | "STOP_INTRO"
}

const initialState = {
  shouldPlayIntroSequence: true,
}

function introReducer(state = initialState, action: IntroAction) {
  switch (action.type) {
    case "PLAY_INTRO":
      return {
        ...state,
        shouldPlayIntroSequence: true,
      }
    case "STOP_INTRO":
      return {
        ...state,
        shouldPlayIntroSequence: false,
      }
    default:
      return state
  }
}

const [state, dispatch] = useReducer(introReducer, initialState)

export { state, dispatch }
