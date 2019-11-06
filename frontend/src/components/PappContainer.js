import React, { useState } from 'react'
import Papp from './Papp'

//the container for all Papps
const PappContainer = ({store}) => {
  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none'}
  const handleVote = (id) => {
    store.dispatch({
      type:'PAPP_VOTE',
      data: id
    })
    setVisible(true)
  }

  return (
    <div>
      <header className="header">Rösta på din favoritpapp!</header>
      <div className="wrapper">
        {store.getState().papp.map(p => <Papp
          key={p.id} papp={p} show={show} handleVote={handleVote} />)}
      </div>
    </div>
  )
}

export default PappContainer
