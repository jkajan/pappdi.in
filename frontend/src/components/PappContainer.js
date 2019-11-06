import React from 'react'
import Papp from './Papp'

//the container for all Papps
const PappContainer = ({store}) => {
  return (
    <div>
      <header className="header">Rösta på din favoritpapp!</header>
      <div className="wrapper">
        {store.getState().papp.map(p => <Papp
          key={p.id} papp={p} store={store} />)}
      </div>
    </div>
  )
}

export default PappContainer
