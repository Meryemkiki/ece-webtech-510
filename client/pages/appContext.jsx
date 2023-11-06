import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <AppContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
