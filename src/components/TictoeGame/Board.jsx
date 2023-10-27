import React from 'react'
import Tile from './Tile'
import Strick from './Strick'

const Board = ({ tiles, onTileClick, playerTrun }) => {
  return (
    <div className='board'>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(0)} value={tiles[0]} className='right-border bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(1)} value={tiles[1]} className='right-border bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(2)} value={tiles[2]} className=' bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(3)} value={tiles[3]} className='right-border bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(4)} value={tiles[4]} className='right-border bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(5)} value={tiles[5]} className='bottom-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(6)} value={tiles[6]} className='right-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(7)} value={tiles[7]} className='right-border'/>
        <Tile playerTrun={playerTrun} onClick={() => onTileClick(8)} value={tiles[8]} />
        <Strick />
    </div>
  )
}

export default Board