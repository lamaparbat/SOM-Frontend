export const storySelection = (state = {}, action) => {
  switch (action.type) {
    case "selectedStory": return action.payload
    default: return state
  }
}