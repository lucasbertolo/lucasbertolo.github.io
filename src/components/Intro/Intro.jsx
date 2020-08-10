import React, { useState } from 'react';
import Game from './Game/Game';
import HistoryTree from './HistoryTree';

const Intro = () => {
  const [allowedHistory, setAllowedHistory] = useState(8);

  // TODO - FAZER LOGICA DO FINAL DO JOGO
  // TODO - ANIMAÇÂO PARA CASO O USER VENÇA
  let time = null;
  const debouncing = (action, timeOut) => {
    clearTimeout(time);

    time = setTimeout(() => {
      action();
    }, timeOut);
  };

  const resetLevel = () => {
    debouncing(() => setAllowedHistory(0), 500);
  };

  const handleLevel = () => {
    debouncing(() => setAllowedHistory(allowedHistory + 1), 1000);
  };

  return (
    <div className="intro-modal">
      <Game handleLevel={handleLevel} resetLevel={resetLevel} />
      {allowedHistory > 0 && <HistoryTree allowedHistory={allowedHistory} />}
    </div>
  );
};

export default Intro;
