import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import { createStore } from 'redux'
import randjoke from './stores/jokestate'
import { useField } from './hooks'

const store = createStore(randjoke)

const App = () => {
  const [joke,setJoke] = useState('')
  const input = useField('text')
  //useEffect that fetches jokes from the backend
  useEffect(() => {
    store.dispatch({type: 'INIT'})
  },[])
  //the function to fetch a random joke
  const handlePapp = () => {
    const jokes = store.getState()
    const rand = Math.floor(Math.random()*(jokes.length))
    setJoke(jokes[rand])
  }
  //the function to generate a joke
  const handleGen = () => {
    console.log('NYI')
  }
  return (
    <div>
      <div>Hello Papps! Välkommen till pappdi.in!</div>
      <button onClick={handleGen}>Generera ett 'Papp' skämt!</button>
      <button onClick={handlePapp}>Random favorit i repris</button>
      <Joke joke={joke} />
      <p>Skicka in en favorit!</p>
      <JokeForm store={store} input={input} />
    </div>
  )
}

export default App
