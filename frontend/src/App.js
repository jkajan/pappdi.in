import React, { useState, useEffect } from 'react'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'
import PappContainer from './components/PappContainer'
import { useField } from './hooks'
import jokeService from './services/joke'
import pappService from './services/papp'
import './App.css'

const App = (props) => {
  const [joke,setJoke] = useState([])
  const inputContent = useField('text')
  const inputAuthor = useField('text')
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
    let rand = Math.floor(Math.random()*(jokes.length))
    while (joke[1] && joke[1]===rand ) {
      rand = Math.floor(Math.random()*(jokes.length))
    }
    setJoke([jokes[rand],rand])
  }
  //the function to generate a joke
  const markovMe = () => {
    const markovChain = {}
    const jokes = props.store.getState().joke
    let jokestr = ""
    for (let j = 0; j <jokes.length; j++) {
      jokestr += jokes[j].content
    }
    const textArr = jokestr.split(' ')
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
      if (!markovChain[word]) {
        markovChain[word] = []
        }
      if (textArr[i + 1]) {
        markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
      }
    }
    const words = Object.keys(markovChain)
    let word = words[Math.floor(Math.random() * words.length)]
    let result = ''
    let newWord = ''
    for (let i = 0; i < words.length; i++ ) {
      result += word + ' '
      newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
      word = newWord
      if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
    }
    console.log(result)
    setJoke([{content: result,author: "Markov"},words.length])
    console.log(joke)
  }

  return (
    <div className="container">
      <div className="header">Hello Papps! Välkommen till pappdi.in!</div>
      <div className="buttonContainer">
        <button onClick={markovMe}>Generera ett 'Papp' skämt!</button>
        <button onClick={handlePapp}>Random favorit i repris</button>
      </div>
      <Joke joke={joke[0]} />
      <JokeForm store={props.store} inputContent={inputContent} inputAuthor={inputAuthor} />
      <br></br>
      <PappContainer store={props.store} />
    </div>
  )
}

export default App
