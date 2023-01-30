// import { useGameContext } from './context/GameContext.js';
import './App.css';
import Board from './components/board/Board.js';

function App() {
  // const game = useGameContext();

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
