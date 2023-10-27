import React, { useEffect, useState } from 'react'
import Board from './Board'
import './tictoe.css'


const Player_X = 'X';
const Player_O = 'O'

const winningCOmbination = [

  {combo: [0, 1, 2], strikeClass: "strike-row-1"},
  {combo: [3, 4, 5], strikeClass: "strike-row-2"},
  {combo: [6, 7, 8], strikeClass: "strike-row-3"},
  {combo: [0, 3, 6], strikeClass: "strike-row-1"},
  {combo: [1, 4, 7], strikeClass: "strike-row-2"},
  {combo: [2, 5, 8], strikeClass: "strike-row-3"},


]



function checkWinner() {
  console.log('check winner')
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
    checkWinner()
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