import React from 'react';
import Game from './Game';
import { Trophy } from './Trophy';

export const WrapperGame = props => {
  const {
    buttonState,
    status,
    showTrophy,
    handleLevel,
    resetLevel,
    gameOver,
    currentLevel,
    lastLevel,
  } = props;

  return (
    buttonState !== status.OPEN &&
    (showTrophy ? (
      <Trophy />
    ) : (
      <Game
        handleLevel={handleLevel}
        resetLevel={resetLevel}
        isOver={gameOver}
        currentLevel={currentLevel}
        totalLevel={lastLevel}
      />
    ))
  );
};
