import { createContext, useState } from "react";
import data from "../data/data.json";

const DataContext = createContext(data);

export const DataContextProvider = {children} =>{
  const [isBookmarked,setIsBookmarked] = useState()
}
  