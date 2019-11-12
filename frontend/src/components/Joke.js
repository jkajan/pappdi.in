import React from 'react'

//the joke component
const Joke = ({joke}) => {
  if (joke) {
    return(
		<div className="callout">
			<p className="jokeContent">{joke.content}<br></br>Submitted by: {joke.author}</p>
		</div>
    )
  } else {
    return(<p></p>)
  }
}

export default Joke
