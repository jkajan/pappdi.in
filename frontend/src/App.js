import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import PappContainer from './components/PappContainer'
import { useField } from './hooks'
import jokeService from './services/joke'
import pappService from './services/papp'
import './App.css'

const App = (props) => {
  const [joke,setJoke] = useState('')
  const inputContent = useField('text')
  const inputAuthor = useField('text')
  //TODO: fundera på varför min MONGODB_URI e whack
  //useEffect that fetches jokes from the backend
  useEffect(() => {
    const get = async() => {
      console.log('get')
      const jokes = await jokeService.getAll()
      const papps = await pappService.getAll()
      props.store.dispatch({
        type: 'JOKE_ADD',
        data: jokes
      })
      props.store.dispatch({
        type: 'PAPP_ADD',
        data: papps
      })
    }
   get()
 },[props.store])
  //the function to fetch a random joke
  const handlePapp = () => {
    const jokes = props.store.getState().joke
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
      <JokeForm store={props.store} inputContent={inputContent} inputAuthor={inputAuthor} />
      <br></br>
      <PappContainer store={props.store} />
    </div>
  )
}

export default App
