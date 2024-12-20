import React, { createContext, useContext } from "react";

const FunctionsContext = createContext();

export const FunctionsProvider = ({ children }) => {
    
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const calculateSum = (a, b) => a + b;

  return (
    <FunctionsContext.Provider value={{ formatDate, calculateSum }}>
      {children}
    </FunctionsContext.Provider>
  );
};

export const useFunctions = () => useContext(FunctionsContext);