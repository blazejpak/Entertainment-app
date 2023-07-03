import { createContext, useState, useContext, useEffect } from "react";
import data from "../data/data.json";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState();

  const initialState = data;
  useEffect(() => {
    setDataLoaded(initialState);
  }, []);

  const toggleBookmarked = (title) => {
    const updatedData = dataLoaded.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
        };
      }
      return item;
    });
    setDataLoaded(updatedData);
  };

  return (
    <DataContext.Provider value={{ toggleBookmarked, dataLoaded }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
