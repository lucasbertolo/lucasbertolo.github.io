import React, { useState } from 'react';
import Game from './Game';
import HistoryTree from './HistoryTree';

const Intro = ({ close }) => {
  const [allowedHistory, setAllowedHistory] = useState(8);

  // TODO - FAZER LOGICA DO FINAL DO JOGO
  // TODO - ANIMAÇÂO PARA CASO O USER VENÇA
  // TODO - REINICIAR JOGO AO SAIR DA PAGINA
  // TODO - MARGINTOP BOTAO X
  // TODO - DESCRIÇÂO DOS EMPREGOS

  let time = null;
  const debouncing = (action, timeOut) => {
    clearTimeout(time);
    time = setTimeout(() => {
      action();
    }, timeOut);
  };

  // const resetLevel = () => {
  //   debouncing(() => setAllowedHistory(0), 500);
  // };

  const handleLevel = () => {
    debouncing(() => setAllowedHistory(allowedHistory + 1), 1000);
  };

  return (
    <div className="intro-modal">
      {close}
      <Game handleLevel={handleLevel} />
      {allowedHistory > 0 && <HistoryTree allowedHistory={allowedHistory} />}
    </div>
  );
};

export default Intro;
