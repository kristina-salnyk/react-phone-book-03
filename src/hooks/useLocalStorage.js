import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const serializedValue = window.localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      window.localStorage.setItem(key, serializedState);
    } catch {}
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
