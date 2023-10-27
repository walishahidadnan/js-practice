import React, { useState } from 'react'
import Board from './Board'
import './tictoe.css'


const Player_X = 'X';
const Player_O = 'O'

const TicToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTrun, setPlayerTrun] = useState()
  return (
    <div>
      <h1>Tic Tac Toe</h1>
        <Board tiles={tiles}/>
    </div>
  )
}

export default TicToe