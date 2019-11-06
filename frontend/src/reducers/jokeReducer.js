const initialState = []

const jokeReducer = (state = initialState, action) => {
  //console.log(action)
  switch(action.type) {
    case 'JOKE_ADD':
      return state.concat(action.data)
    default:
  }
  return state
}

export default jokeReducer
