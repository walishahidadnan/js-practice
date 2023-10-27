import React from 'react'

const Tile = ({className, value}) => {
  return (
    <div className={`tile ${className}`}>{value}</div>
  )
}

export default Tile