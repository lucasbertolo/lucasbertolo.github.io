import React, { Suspense, lazy, useState } from 'react';

const Resume = lazy(() => import('./Resume'));

export const WrapperResume = () => {
  const [showResume, setShowResume] = useState(false);
  const [fade, setFade] = useState(false);

  const handleResume = () => {
    setFade(!showResume);
    setTimeout(() => setShowResume(!showResume), 700);
  };

  return (
    <>
      <button type="button" onClick={handleResume} style={{ marginBottom: 30 }}>
        {showResume ? 'Ocultar curriculo' : 'Ver curriculo'}
      </button>
      {showResume && (
        <Suspense fallback={<div className="spinner">Carregando...</div>}>
          <Resume fade={fade} />
        </Suspense>
      )}
    </>
  );
};
