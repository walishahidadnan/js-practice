import React from 'react'
import GameState from './GameState'

const Reset = ({gameState, onReset}) => {
    if(gameState === GameState.inProgress){
        return;
    }
  return (
    <div>
        <button className='reset-button' onClick={onReset}>Reset</button>
    </div>
  )
}

export default Reset