const initialState = []

const pappStore = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'PAPP_ADD':
      return state.concat(action.data)
    default:
  }
  return state
}

export default pappStore
