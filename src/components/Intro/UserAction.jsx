import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const UserAction = ({
  isComplete,
  buttonState,
  status,
  gameOver,
  setShowTrophy,
  handleDisplayButton,
}) => {
  const { l } = useContext(CultureContext);

  return (
    <>
      {!isComplete && (
        <span className="full-history">
          <button
            className={buttonState === status.DOUBT ? 'bounce warning-btn' : ''}
            onClick={handleDisplayButton}
            type="button"
          >
            {buttonState === status.CLOSED
              ? l('giveUpBtn')
              : l('areYouSureBtn')}
          </button>
        </span>
      )}
      {gameOver && (
        <button onClick={() => setShowTrophy(false)} type="button">
          {l('playAgain')}
        </button>
      )}
    </>
  );
};
