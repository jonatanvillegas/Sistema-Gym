import React, { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <FunctionsProvider>
      <AppContext.Provider 
      value={{ 
        useAuth, 
        useFunctions 
        
        }}>
        {children}
      </AppContext.Provider>
    </FunctionsProvider>
  </AuthProvider>
);

export const useAppContext = () => useContext(AppContext);