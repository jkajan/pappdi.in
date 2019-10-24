//implement the form to submit jokes here
import React from 'react'

const JokeForm = () => {

  const handleSumbit = async(event) => {
    event.preventDefault()
    console.log('NYI')
  }

  return(
    <div>
      <form onSubmit={handleSumbit}>
        <input></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JokeForm
