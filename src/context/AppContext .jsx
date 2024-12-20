import React from 'react';
import { AuthProvider } from '@/context/AuthContext'; 
import { FunctionsProvider } from '@/context/FunctionsContext '; 

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <FunctionsProvider>
      {children}
    </FunctionsProvider>
  </AuthProvider>
);
