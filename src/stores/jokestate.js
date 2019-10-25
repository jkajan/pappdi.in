const initialState = [
  "Joke 1",
  "Joke 2",
  "Joke 3"
]

const jokeStore = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'INIT':
    console.log('state INIT NYI')
    return state
    case 'ADD':
      return state.concat(action.data)
    default:
  }
  return state
}

export default jokeStore
