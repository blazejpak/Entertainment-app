import React from "react";
import data from "../data/data.json";

import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const Search = ({ placeholder, onChange }) => {
  return (
    <div className="mt-6 flex gap-4">
      <SearchIcon className="scale-[.8]" />
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-[220px] border-b border-transparent bg-transparent font-light  caret-[#FC4747] outline-none focus-within:border-b focus-within:border-[#5A698F] md:w-[330px]"
      />
    </div>
  );
};

export default Search;
