/* eslint-disable no-plusplus */
import React, { useEffect, useState, useContext } from 'react';
import { Intro } from './Intro';
import { CultureContext } from '../../core/resources';

const previewTextBr = [
  'Este jogo do mano Dinossauro libera acesso ao meu histórico profissional.',
  'Conforme você vai passando pelas portas, mais um item é liberado.',
  'Se preferir desistir, você pode apertar o botão de ver tudo e não precisar jogar. <span role="img" aria-label="chicken-img"> 🐔  </span>',
  'Boa sorte!!!',
];

const previewText = [
  'This game was made to allow access to my professional history',
  'As you are going through the doors, one more item is released',
  'If you rather give up, you can check the whole history pressing the "see all" button. <span role="img" aria-label="chicken-img"> 🐔  </span>',
  'Good luck!!!',
];

export default function History({ close }) {
  const { culture } = useContext(CultureContext);
  const [showGame, setShowGame] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const goOn = () => {
    setShowGame(true);
  };

  const source = culture === 'pt_BR' ? previewTextBr : previewText;

  const SPEED = 60; // THE LOWER THE FASTER
  const SCROLL_AT = 20;

  let iIndex = 0;
  let iArrLength = previewText[0].length;
  let iTextPos = 0;
  let sContents = '';
  let iRow;

  function typewriter() {
    const destination = document.getElementById('typedtext');
    if (destination) {
      sContents = ' ';
      iRow = Math.max(0, iIndex - SCROLL_AT);

      while (iRow < iIndex) {
        sContents += `${source[iRow++]}<br />`;
      }
      destination.innerHTML = `${sContents +
        source[iIndex].substring(0, iTextPos)}_`;
      if (iTextPos++ === iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== source.length) {
          iArrLength = source[iIndex].length;
          setTimeout(() => typewriter(), 500);
        }
      } else {
        setTimeout(() => typewriter(), SPEED);
      }

      setTimeout(() => setShowBtn(true), 3000);
    }
  }

  useEffect(() => {
    typewriter();
  }, []);

  return (
    <>
      {close}
      {window.localStorage?.currentLevel || showGame ? (
        <Intro />
      ) : (
        <div>
          <p id="typedtext" />
          {showBtn && (
            <span
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              className="fadeIn"
            >
              <button type="button" onClick={goOn}>
                OK
              </button>
            </span>
          )}
        </div>
      )}
    </>
  );
}
