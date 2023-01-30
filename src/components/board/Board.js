import React from 'react';
import { useGameContext, chooseBox } from '../../context/GameContext.js';
import Box from '../box/Box.js';

export default function Board() {
  const currentGame = useGameContext();
  const gameBoard = currentGame.gameBoard;

  console.log(currentGame);
  return (
    <div>
      {gameBoard.map((square, index) => (
        <Box onClick={chooseBox} key={index} value={square} />
      ))}
    </div>
  );
}
