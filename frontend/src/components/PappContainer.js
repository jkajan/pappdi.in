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
      await pappService.vote(papp.id)
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
	<div className="grid-container full">
	<div className="grid-x">
		<div className="cell medium-12">
		  <h2>Röst på din favoritpapp!</h2>
		</div>
		{store.getState().papp.map(p => <Papp
			key={p.id} papp={p} show={show} click={click} handleVote={handleVote} />)}
    </div>
    </div>

  )
}

export default PappContainer
