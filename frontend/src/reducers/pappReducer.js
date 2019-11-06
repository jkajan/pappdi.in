const initialState = []

const pappReducer = (state = initialState, action) => {
  //console.log(action)
  let newState = state
  switch(action.type) {
    case 'PAPP_ADD':
      return state.concat(action.data)
    case 'PAPP_VOTE':
      for (let i = 0;i<newState.length;i++) {
        if (newState[i].id === action.data) {
          newState[i].votes += 1
          return newState
        }
      }
      return state
    default:
  }
  return state
}

export default pappReducer
