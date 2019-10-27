import React from 'react'

//the joke component
const Joke = ({joke}) => {
  if (joke.content) {
    return(
      <div className="jokeContent">{joke.content}<br></br>Submitted by: {joke.author}</div>
    )
  } else {
    return(<div></div>)
  }
}

export default Joke
