import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search hospitals..."
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
