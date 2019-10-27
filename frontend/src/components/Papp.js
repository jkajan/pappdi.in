import React from 'react'

const Papp = ({papp}) => {
  return (
    <div className="item">
    <img src={papp.p} alt={papp}></img>
    </div>
  )
}

export default Papp
