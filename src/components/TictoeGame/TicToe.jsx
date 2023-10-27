import React, { useEffect, useState } from 'react'
import Board from './Board'
import './tictoe.css'


const Player_X = 'X';
const Player_O = 'O'

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];


function checkWinner(tiles, setStrikeClass) {
    for (const { combo, strikeClass } of winningCombinations) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];
      console.log("Tile Values:", tileValue1, tileValue2, tileValue3); 
      if (
        tileValue1 != null &&
        tileValue1 === tileValue2 &&
        tileValue2 === tileValue3
      ) {
        setStrikeClass(strikeClass);
      }
    }

  }


const TicToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTrun, setPlayerTrun] = useState(Player_X);
  const [strikeClass, setStrikeClass] = useState('')

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

  useEffect(()=>{
    checkWinner();
  }, [tiles])

  return (
    <div>
      <h1>Tic Tac Toe</h1>
        <Board
          playerTrun={playerTrun} 
          tiles={tiles} 
          onTileClick={handleTileClick}
          strikeClass={strikeClass}
         />
    </div>
  )
}

export default TicToe