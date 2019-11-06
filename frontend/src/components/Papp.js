import React from 'react'

const Papp = ({papp, show, click, handleVote}) => {
  return (
    <div>
    <div className={click.click} onClick={() => handleVote(papp.id)}>
      <img src={papp.p} alt="Din far borde synas här!"></img>
    </div>
    <div style={show}>votes: {papp.votes}</div>
    </div>
  )
}

export default Papp
