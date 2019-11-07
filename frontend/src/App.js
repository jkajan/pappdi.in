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
    <div className="grid-x grid-margin-x">
      <div className="cell large-8 large-offset-2">
		  <div className="media-object">
			  <div className="media-object-section">
				<div className="thumbnail">
					<img src="pipe-48.png"></img>
				</div>
			  </div>
		  <div className="media-object-section">
			<h1>pappdi.in</h1>
			<p>Kom int hiid å lär Papp ti ha roulit.</p>
		  </div>
	  </div>
	</div>
      <div className="cell large-8 large-offset-2">
        <button className="button primary" type="button" onClick={handleGen}>Generér ett 'Papp'-skämt!</button>
        <button className="button primary" type="button" onClick={handlePapp}>Random favorit i repris</button>
      </div>
	  <div className="cell large-8 large-offset-2">
		  <Joke joke={joke} />
		  <JokeForm store={props.store} inputContent={inputContent} inputAuthor={inputAuthor} />
	  </div>
	  <div className="cell large-8 large-offset-2">
		  <PappContainer store={props.store} />
	  </div>
    </div>
  )
}

export default App
