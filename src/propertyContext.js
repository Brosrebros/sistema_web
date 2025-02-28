import { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [propertyType, setPropertyType] = useState('Property');

  return (
    <PropertyContext.Provider value={{ propertyType, setPropertyType }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
