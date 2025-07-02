import React, { createContext, useContext, useState } from 'react';

const FeaturesContext = createContext();

export const useFeaturesContext = () => useContext(FeaturesContext);

export const FeaturesProvider = ({ children }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <FeaturesContext.Provider value={{ activeFeature, setActiveFeature }}>
      {children}
    </FeaturesContext.Provider>
  );
}; 