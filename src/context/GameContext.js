import { createContext, useContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
    { space: 9, content: '' },
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

export { GameProvider, useGameContext };
