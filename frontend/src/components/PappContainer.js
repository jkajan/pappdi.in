import React, { useState } from 'react'
import Papp from './Papp'
import pappService from '../services/papp'

//the container for all Papps
const PappContainer = ({store}) => {
  const [voted, setVoted] = useState(false)
  const click = { click: voted ? 'item noclick' : ' item click' }
  const show = { display: voted ? '' : 'none' }
  const handleVote = async(papp) => {
    try {
      const nPapp = {
        p: papp.p,
        votes: papp.votes + 1
      }
      await pappService.update(papp.id, nPapp)
      store.dispatch({
        type:'PAPP_VOTE',
        data: papp.id
      })
      setVoted(true)
    } catch(exception) {
      console.log('vote failed.')
    }
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
