import React from 'react'

const Papp = ({papp,store,voted}) => {
  const handleVote = (id) => {
    store.dispatch({
      type:'PAPP_VOTE',
      data: id
    })
  }

  return (
    <div className="item" onClick={() => handleVote(papp.id)}>
    <img src={papp.p} alt="Din far borde synas här!"></img>
    <span>votes: {papp.votes}</span>
    </div>
  )
}

export default Papp
