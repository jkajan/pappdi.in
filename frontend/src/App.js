import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import PappContainer from './components/PappContainer'
import { createStore } from 'redux'
import jokestate from './stores/jokestate'
import { useField } from './hooks'
import jokeService from './services/joke'
import './App.css'

const store = createStore(jokestate)

const App = () => {
  const [joke,setJoke] = useState('')
  const inputContent = useField('text')
  const inputAuthor = useField('text')
  //TODO: fundera på varför min MONGODB_URI e whack
  //useEffect that fetches jokes from the backend
  useEffect(() => {
    const get = async() => {
      console.log('get')
      const jokes = await jokeService.getAll()
      store.dispatch({
        type: 'ADD',
        data: jokes
      })
    }
   get()
  },[])
  //Placeholder Papps
  const papps = [
    {
      id: 1,
      p:"/static/father1.png",
      votes: 0
    },
    {
      id: 2,
      p:"/static/father2.png",
      votes: 0
    },
    {
      id: 3,
      p:"/static/father3.png",
      votes: 0
    }
  ]
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
    <div className="container">
      <div>Hello Papps! Välkommen till pappdi.in!</div>
      <button onClick={handleGen}>Generera ett 'Papp' skämt!</button>
      <button onClick={handlePapp}>Random favorit i repris</button>
      <Joke joke={joke} />
      <p>Skicka in en favorit!</p>
      <JokeForm store={store} inputContent={inputContent} inputAuthor={inputAuthor} />
      <br></br>
      <PappContainer papps={papps} />
    </div>
  )
}

export default App
