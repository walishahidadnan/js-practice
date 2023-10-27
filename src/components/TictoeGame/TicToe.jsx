import React, { useState } from 'react'
import Board from './Board'
import './tictoe.css'


const Player_X = 'X';
const Player_O = 'O'

const TicToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTrun, setPlayerTrun] = useState(Player_X)

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTrun;
    setTiles(newTiles)
    if(playerTrun == Player_X){
      setPlayerTrun(Player_O)
    } else {
      setPlayerTrun(Player_X)
    }
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
        <Board playerTrun={playerTrun} tiles={tiles} onTileClick={handleTileClick}/>
    </div>
  )
}

export default TicToe