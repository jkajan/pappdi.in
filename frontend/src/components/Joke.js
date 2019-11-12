import React from 'react'

//the joke component
const Joke = ({joke}) => {
  if (joke) {
    return(
<<<<<<< HEAD
		<div className="callout">
			<p className="jokeContent">{joke.content}<br></br>Submitted by: {joke.author}</p>
		</div>
=======
      <div className="jokeContent">{joke.content}<br></br>Submitted by: {joke.author}</div>
>>>>>>> c9b093d86350412fe4c4bbf99d323f06902567c2
    )
  } else {
    return(<div></div>)
  }
}

export default Joke
