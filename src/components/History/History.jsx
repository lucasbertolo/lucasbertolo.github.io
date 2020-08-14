/* eslint-disable no-plusplus */
import React, { useEffect, useState, useContext } from 'react';
import { Intro } from './Intro';
import { CultureContext } from '../../core/resources';
import { historyPreview } from '../../core/sources';

export default function History({ close }) {
  const { culture } = useContext(CultureContext);
  const [showGame, setShowGame] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const goOn = () => {
    setShowGame(true);
  };

  const source = historyPreview[culture];

  const SPEED = 40; // THE LOWER THE FASTER
  const SCROLL_AT = 20;

  let iIndex = 0;
  let iArrLength = source[0].length;
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
