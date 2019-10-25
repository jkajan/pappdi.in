import jokeService from '../services/joke'

const initialState = []

const jokeStore = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD':
      return state.concat(action.data)
    default:
  }
  return state
}

export default jokeStore
