import React from 'react'

const Papp = ({papp, show, click, handleVote}) => {
  return (
    <div className="cell small-6 medium-4 large-3">
    <div className={click.click} onClick={() => handleVote(papp)}>
      <img src={papp.p} alt="Din far borde synas här!"></img>
    </div>
    <div style={show}>votes: {papp.votes}</div>
    </div>
  )
}

export default Papp
