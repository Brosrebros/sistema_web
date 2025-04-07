import { createContext, useContext, useState } from 'react';

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, setState] = useState(false);

  const toggleState = () => setState(prev => !prev);

  return (
    <filterContext.Provider value={{ state, toggleState }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
