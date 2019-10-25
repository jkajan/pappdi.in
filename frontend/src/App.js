import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import { createStore } from 'redux'
import jokestate from './stores/jokestate'
import { useField } from './hooks'
import jokeService from './services/joke'

const store = createStore(jokestate)

const App = () => {
  const [joke,setJoke] = useState('')
  const input = useField('text')
  //TODO: fundera på varför proxyn inte funkar & varför min MONGODB_URI e whack
  //useEffect that fetches jokes from the backend
  useEffect(() => {
    const get = async() => {
      console.log('get')
      const jokes = await jokeService.getAll()
      store.dispatch({
        type: 'ADD',
        data: jokes
      })
      /*jokes.map(j => {
        store.dispatch({
          type: 'ADD',
          data: j
        })
      })*/
    }
   get()
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
