import React from 'react'
import Papp from './Papp'

//the container for all Papps
const PappContainer = ({papps}) => {
  return (
    <div>
      <header className="header">Rösta på din favoritpapp!</header>
      <div className="wrapper">
        {papps.map(p => <Papp key={p.id} papp={p.p} />)}
      </div>
    </div>
  )
}

export default PappContainer
