import React from 'react';
import './box.css';
import { useGameContext } from '../../context/GameContext.js';

export default function Box() {
  const game = useGameContext();

  return <div className="box">Box</div>;
}
