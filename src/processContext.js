import React, { createContext, useContext, useState } from 'react';

const ProcessContext = createContext();

export const ProcessProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStep = () => {
    setActiveStep(prev => prev + 1);
  };

  return (
    <ProcessContext.Provider value={{ activeStep, handleStep }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const useProcess = () => useContext(ProcessContext);
