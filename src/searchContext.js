import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [activeStep, setActiveStep] = useState(1);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        propertyType,
        setPropertyType,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
