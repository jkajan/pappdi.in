//implement the form to submit jokes here
import React from 'react'
import jokeService from '../services/joke'

const JokeForm = ({store, inputContent, inputAuthor}) => {

  const handleSubmit = async(event) => {
    try{
      event.preventDefault()
      const joke = await jokeService.create({
        content: event.target[0].value,
        author: event.target[1].value
      })
      console.log(joke)
      store.dispatch({
        type: 'JOKE_ADD',
        data: joke
      })
      inputContent.reset()
      inputAuthor.reset()
    } catch (exception) {
      console.log(exception)
    }
  }

  return(
    <div className="jokeForm">
      <h2>Skick in en favorit!</h2>
	  <p>Issint skriv så hemska saker. Lag int Papp diin besviken.</p>
      <form onSubmit={handleSubmit}>
	  	<div className="medium-12 cell">
	  		<label>Riktigt bra läppä
			<textarea name="input" placeholder="Hähä" rows="10" columns="50" onChange={inputContent.onChange} value={inputContent.value}>
			</textarea>
	  		</label>
	  		<label>Kvöm jir tö?
			<input className="author" placeholder="Papp diin" type="text" value={inputAuthor.value} onChange={inputAuthor.onChange}></input>
	  		</label>
			<button className="button primary" type="submit">Submit</button>
	  	</div>
      </form>
    </div>
  )
}

export default JokeForm
