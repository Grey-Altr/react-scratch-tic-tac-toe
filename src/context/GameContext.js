import { createContext, useContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    { box: 1, content: '' },
    { box: 2, content: '' },
    { box: 3, content: '' },
    { box: 4, content: '' },
    { box: 5, content: '' },
    { box: 6, content: '' },
    { box: 7, content: '' },
    { box: 8, content: '' },
    { box: 9, content: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(false);
  const [gameMessage, setGameMessage] = useState('Go Go Player X!');

  return (
    <GameContext.Provider
      value={{
        gameBoard,
        setGameBoard,
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be within a GameProvider');
  }

  return context;
};

const chooseBox = (setGameBoard, gameBoard, box, currentPlayer) => {
  setGameBoard((gameBoard[box - 1].content = currentPlayer));
};

export { GameProvider, useGameContext };
