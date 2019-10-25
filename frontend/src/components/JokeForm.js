//implement the form to submit jokes here
import React from 'react'

const JokeForm = ({store, input}) => {

  const handleSumbit = async(event) => {
    event.preventDefault()
    store.dispatch({
      type: 'ADD',
      data: event.target[0].value
    })
    input.reset()
  }

  return(
    <div>
      <form onSubmit={handleSumbit}>
        <textarea name="input" rows="10" columns="50" onChange={input.onChange} value={input.value}>
        </textarea>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JokeForm
