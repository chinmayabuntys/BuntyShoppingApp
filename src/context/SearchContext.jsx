import { createContext, useState } from "react";
export const SearchContext = createContext();
export function SearchProvider({children}) {
  const [searchText,setSearchText]=useState("");
  const [category,setCategory]=useState("all");
  const [priceRange,setPriceRange]=useState([0,10000]);
  const [sortOrder,setSortOrder]=useState("");
  return <SearchContext.Provider value={{searchText,setSearchText,category,setCategory,priceRange,setPriceRange,sortOrder,setSortOrder}}>{children}</SearchContext.Provider>
}
