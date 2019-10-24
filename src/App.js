import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'


const App = () => {
  const [jokes, setJokes] = useState([])
  const [joke, setJoke] = useState('')
  //useEffect that fetches jokes from the backend
  useEffect(() => {
    console.log('useEffect NYI')
  },[])
  //the function to fetch a random joke
  const handlePapp = () => {
    console.log('NYI')
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
      <JokeForm />
    </div>
  )
}

export default App;
