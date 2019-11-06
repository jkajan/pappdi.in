import React, { useState } from 'react'
import Papp from './Papp'

//the container for all Papps
const PappContainer = ({store}) => {
  const [voted, setVoted] = useState(false)
  const click = { click: voted ? 'item noclick' : ' item click' }
  const show = { display: voted ? '' : 'none' }
  const handleVote = (id) => {
    store.dispatch({
      type:'PAPP_VOTE',
      data: id
    })
    setVoted(true)
  }

  return (
    <div>
      <header className="header">Rösta på din favoritpapp!</header>
      <div className="wrapper">
        {store.getState().papp.map(p => <Papp
          key={p.id} papp={p} show={show} click={click} handleVote={handleVote} />)}
      </div>
    </div>
  )
}

export default PappContainer
