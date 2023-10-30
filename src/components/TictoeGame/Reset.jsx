import React from 'react'
import GameState from './GameState'

const Reset = ({gameState}) => {
    if(gameState === GameState.inProgress){
        return;
    }
  return (
    <div>
        <button className='reset-button'>Reset</button>
    </div>
  )
}

export default Reset