//implement the form to submit jokes here
import React from 'react'
import jokeService from '../services/joke'

const JokeForm = ({store, inputContent, inputAuthor}) => {

  const handleSumbit = async(event) => {
    event.preventDefault()
    const joke = await jokeService.create({
      content: event.target[0].value,
      author: event.target[1].value
    })
    console.log(joke)
    store.dispatch({
      type: 'ADD',
      data: joke
    })
    inputContent.reset()
    inputAuthor.reset()
  }

  return(
    <div>
      <form onSubmit={handleSumbit}>
        <textarea name="input" rows="10" columns="50" onChange={inputContent.onChange} value={inputContent.value}>
        </textarea>
        <br></br>
        <label>Vem i frick e du?!</label><br></br>
        <input value={inputAuthor.value} onChange={inputAuthor.onChange}></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JokeForm
