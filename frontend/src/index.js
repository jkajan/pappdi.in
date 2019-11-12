import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import jokeReducer from './reducers/jokeReducer'
import pappReducer from './reducers/pappReducer'
import App from './App'
import './foundation/foundation.css'

const reducer = combineReducers({
  joke: jokeReducer,
  papp: pappReducer
})

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
