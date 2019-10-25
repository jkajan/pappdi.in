import jokeService from '../services/joke'

const initialState = []

const jokeStore = async(state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD':
    console.log(state)
      return state.concat(action.data)
    default:
  }
  return state
}

export default jokeStore
