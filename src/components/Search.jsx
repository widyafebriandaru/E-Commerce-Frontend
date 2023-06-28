import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="ml-2 bg-gray-300 text-gray-700 rounded px-3 py-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
