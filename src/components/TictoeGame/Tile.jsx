import React from 'react'

const Tile = ({className, value, onClick, playerTrun}) => {

  let hoverClass = null;
  if(value == null && playerTrun != null){
    hoverClass = `${playerTrun.toLowerCase()}-hover`
  }

  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
  )
}

export default Tile