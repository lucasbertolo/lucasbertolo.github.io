import React, { useState } from 'react';
import { historyTree } from '../../core/sources';
import HistoryTree from './HistoryTree';
import { UserAction } from './UserAction';
import { WrapperGame } from './WrapperGame';

const STATUS = {
  CLOSED: 'CLOSED',
  DOUBT: 'DOUBT',
  OPEN: 'OPEN',
};

export const Intro = () => {
  const LAST_LEVEL = 1;
  let time = null;

  const [allowedHistory, setAllowedHistory] = useState(
    window.localStorage?.currentLevel || 0,
  );
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [buttonState, setButtonState] = useState(STATUS.CLOSED);
  const [showTrophy, setShowTrophy] = useState(false);

  const debouncing = (action, timeOut) => {
    clearTimeout(time);
    time = setTimeout(() => {
      action();
    }, timeOut);
  };

  const resetLevel = () => {
    debouncing(() => setCurrentLevel(0), 500);
  };

  const handleLevel = () => {
    debouncing(() => {
      const result = currentLevel + 1;
      setCurrentLevel(result);

      if (result > allowedHistory) {
        setAllowedHistory(result);
        window.localStorage.currentLevel = result;
      }

      if (result === LAST_LEVEL) {
        setGameOver(true);
        setTimeout(() => setShowTrophy(true), 3000);
      }
    }, 300);
  };

  const handleDisplayButton = () => {
    debouncing(() => {
      if (buttonState === STATUS.CLOSED) setButtonState(STATUS.DOUBT);
      if (buttonState === STATUS.DOUBT) {
        setButtonState(STATUS.OPEN);
        setAllowedHistory(LAST_LEVEL);
      }
    }, 100);
  };

  const historyIsComplete =
    buttonState === STATUS.OPEN || Number(allowedHistory) === LAST_LEVEL;

  return (
    <div className="intro-modal fadeIn">
      <WrapperGame
        buttonState={buttonState}
        status={STATUS}
        showTrophy={showTrophy}
        handleLevel={handleLevel}
        resetLevel={resetLevel}
        gameOver={gameOver}
        currentLevel={currentLevel}
        lastLevel={LAST_LEVEL}
      />
      {allowedHistory > 0 && (
        <HistoryTree
          historyTree={historyTree}
          allowedHistory={allowedHistory}
          isOpening={buttonState === STATUS.OPEN}
        />
      )}
      <UserAction
        isComplete={historyIsComplete}
        buttonState={buttonState}
        status={STATUS}
        gameOver={gameOver}
        setShowTrophy={setShowTrophy}
        handleDisplayButton={handleDisplayButton}
      />
    </div>
  );
};
