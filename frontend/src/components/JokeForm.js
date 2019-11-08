//implement the form to submit jokes here
import React from 'react'
import jokeService from '../services/joke'

const JokeForm = ({store, inputContent, inputAuthor}) => {

  const handleSumbit = async(event) => {
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
      <p className="marginLeft">Skicka in en favorit!</p>
      <form onSubmit={handleSumbit}>
        <textarea name="input" rows="10" columns="50" onChange={inputContent.onChange} value={inputContent.value}>
        </textarea>
        <br></br>
        <label className="marginLeft">Vem i frick e du?!</label><br></br>
        <input className="author" value={inputAuthor.value} onChange={inputAuthor.onChange}></input>
        <br></br>
        <button className="marginLeft" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JokeForm
