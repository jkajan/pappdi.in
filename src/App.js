import React, { useState } from 'react'
import logo from './logo.svg'
import Joke from './components/joke'


const App = () => {
  const [joke, setJoke] = useState('')
  //the function to fetch a random joke
  const handlePapp = () => {
    console.log('NYI')

  }
  //the function to generate a joke (NYI)
  const handleGen = () => {
    console.log('NYI')
  }
  return (
    <div>
      <div>Hello Papps!</div>
      <button onClick={handleGen}>Generera ett 'Papp' skämt!</button>
      <button onClick={handlePapp}>Ta del av papperiets favoriter!</button>
      <Joke joke={joke} />
      <p>Skicka in en favorit!</p>

    </div>
  )
}

export default App;
