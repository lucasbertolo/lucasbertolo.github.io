import React, { useContext, useState } from 'react';
import { CultureContext } from '../../core/resources';
import { historyTree } from '../../core/sources';
import Game from './Game';
import HistoryTree from './HistoryTree';

const STATUS = {
  CLOSED: 'CLOSED',
  DOUBT: 'DOUBT',
  OPEN: 'OPEN',
};
const Intro = ({ close }) => {
  const { l } = useContext(CultureContext);

  const LAST_LEVEL = historyTree.length;
  const [allowedHistory, setAllowedHistory] = useState(
    window.localStorage?.currentLevel || 0,
  );
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [buttonState, setButtonState] = useState(STATUS.CLOSED);

  // TODO - FAZER LOGICA DO FINAL DO JOGO - APARECER NA TELA JOGO COMPLETO
  // TODO - ANIMAÇÂO PARA CASO O USER VENÇA
  // TODO - DESCRIÇÂO DOS EMPREGOS

  let time = null;
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

      if (result === LAST_LEVEL) setGameOver(true);
    }, 500);
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

  return (
    <div className="intro-modal">
      {close}
      {buttonState !== STATUS.OPEN && (
        <Game
          handleLevel={handleLevel}
          resetLevel={resetLevel}
          isOver={gameOver}
          currentLevel={currentLevel}
        />
      )}
      {allowedHistory > 0 && (
        <HistoryTree
          historyTree={historyTree}
          allowedHistory={allowedHistory}
          isOpening={buttonState === STATUS.OPEN}
        />
      )}
      {buttonState !== STATUS.OPEN && (
        <span className="full-history">
          <button
            className={buttonState === STATUS.DOUBT ? 'bounce' : ''}
            onClick={handleDisplayButton}
            type="button"
          >
            {buttonState === STATUS.CLOSED
              ? l('giveUpBtn')
              : l('areYouSureBtn')}
          </button>
        </span>
      )}
    </div>
  );
};

export default Intro;
