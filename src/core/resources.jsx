import React, { useEffect, useState } from 'react';
import { dictionary } from './dictionary';

export const CultureContext = React.createContext({});

export function CultureProvider({ initialCulture, children }) {
  const [culture, setCulture] = useState(initialCulture);
  const [updateResources, setUpdateResources] = useState(false);

  function updateCulture(res) {
    if (res) setCulture(res);
  }

  function translateLocal(word) {
    try {
      const item = dictionary[culture][word];
      if (item) return dictionary[culture][word];
      return word;
    } catch (err) {
      return word;
    }
  }

  async function handleCulture() {
    const prevCulture = await window.sessionStorage.getItem('culture');
    if (!prevCulture) {
      const lang = 'pt_BR';
      setCulture(lang);
      window.sessionStorage.setItem('culture', lang);
    } else {
      setCulture(prevCulture);
    }
  }

  function handleUpdateResources() {
    setUpdateResources(!updateResources);
  }

  useEffect(() => {
    handleCulture();
  }, []);

  return (
    <CultureContext.Provider
      value={{
        l: translateLocal,
        updateCulture,
        updateResources: handleUpdateResources,
        culture,
      }}
    >
      {children}
    </CultureContext.Provider>
  );
}
