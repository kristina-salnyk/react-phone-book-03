import { useState } from 'react';

const useFilter = defaultValue => {
  const [filter, setFilter] = useState(defaultValue);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return [filter, changeFilter];
};

export default useFilter;
