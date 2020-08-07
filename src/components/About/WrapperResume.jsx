import React, { Suspense, lazy, useState, useContext } from 'react';
import { CultureContext } from '../../core/resources';

const Resume = lazy(() => import('./Resume'));

export const WrapperResume = () => {
  const { l } = useContext(CultureContext);

  const [showResume, setShowResume] = useState(false);
  const [fade, setFade] = useState(false);

  const handleResume = () => {
    setFade(!showResume);
    setTimeout(() => setShowResume(!showResume), 700);
  };

  return (
    <>
      <button type="button" onClick={handleResume} style={{ marginBottom: 30 }}>
        {showResume ? l('hideResume') : l('showResume')}
      </button>
      {showResume && (
        <Suspense fallback={<div className="spinner">Carregando...</div>}>
          <Resume fade={fade} />
        </Suspense>
      )}
    </>
  );
};
