import React, { ChangeEvent, useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="relative">
      <input
        className="placeholder-neutral-200 placeholder:font-poppins placeholder:font-semibold appearance-none border-2 pl-10 rounded-full border-gray-300 hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-offset-secondary focus:border-blue-600 focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />

      <div className="absolute left-0 inset-y-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
