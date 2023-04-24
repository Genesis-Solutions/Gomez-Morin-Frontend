import React from "react";
import SearchIcon from "@mui/icons-material/Search";

/**
 * A functional component that renders a search bar with a search icon.
 * @param {Object} props - The props object that contains the component's properties.
 * 
 * @return {JSX.Element} - A JSX element that represents the search bar.
 */
const SearchBar = ({}) => {
  return (
    <div className="relative flex justify-start items-center">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-blue-500 w-full p-2.5 px-10 "
        type="search"
        placeholder="Búsqueda"
        autoComplete="off"
      />
      <SearchIcon className="absolute left-2.5 text-gray-500" />
    </div>
  );
};

export default SearchBar;
