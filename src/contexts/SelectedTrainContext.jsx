// context/SelectedTrainProvider.js
import React, { createContext, useContext, useState } from "react";

const SelectedTrainContext = createContext();

export const useSelectedTrain = () => {
  return useContext(SelectedTrainContext);
};

export const SelectedTrainProvider = ({ children }) => {
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <SelectedTrainContext.Provider
      value={{ selectedTrain, setSelectedTrain, selectedClass, setSelectedClass }}
    >
      {children}
    </SelectedTrainContext.Provider>
  );
};
