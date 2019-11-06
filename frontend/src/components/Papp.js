import React from 'react'

const Papp = ({papp, show, handleVote}) => {

  return (
    <div>
    <div className="item" onClick={() => handleVote(papp.id)}>
      <img src={papp.p} alt="Din far borde synas här!"></img>
    </div>
    <div className="vote" style={show}>votes: {papp.votes}</div>
    </div>
  )
}

export default Papp
