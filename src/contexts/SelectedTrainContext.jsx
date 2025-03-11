// contexts/SelectedTrainContext.js
import { createContext, useContext, useState, useEffect } from "react";

const SelectedTrainContext = createContext();

export const SelectedTrainProvider = ({ children }) => {
  const [selectedTrain, setSelectedTrain] = useState(() => {
    const savedTrain = localStorage.getItem("selectedTrain");
    return savedTrain ? JSON.parse(savedTrain) : null;
  });

  const [selectedClass, setSelectedClass] = useState(() => {
    const savedClass = localStorage.getItem("selectedClass");
    return savedClass ? savedClass : "";
  });

  useEffect(() => {
    localStorage.setItem("selectedTrain", JSON.stringify(selectedTrain));
  }, [selectedTrain]);

  useEffect(() => {
    localStorage.setItem("selectedClass", selectedClass);
  }, [selectedClass]);

  return (
    <SelectedTrainContext.Provider
      value={{
        selectedTrain,
        setSelectedTrain,
        selectedClass,
        setSelectedClass,
      }}
    >
      {children}
    </SelectedTrainContext.Provider>
  );
};

export const useSelectedTrain = () => useContext(SelectedTrainContext);
