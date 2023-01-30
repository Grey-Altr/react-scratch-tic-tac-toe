import { useGameContext } from './context/GameContext.js';
import './App.css';

function App() {
  const game = useGameContext();
  console.log(game);
  return <div className="App">sad;fgoihasfg</div>;
}

export default App;
