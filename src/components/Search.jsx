import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex items-center">
      <form>
        <input
          type="text"
          value={searchQuery} //supaya ketika di enter, nilai di dalam kolom tidak hilang
          onChange={(e) => setSearchQuery(e.target.value)} //Ketika ada input di submit, akan set sesuai nilai yg dimasukin
          className="text-black border border-gray-300 rounded px-3 py-2"
          placeholder="Search..."
        />
        <Link
          to={`/search?query=${encodeURIComponent(searchQuery)}`}
          className="ml-2 bg-gray-300 text-gray-700 rounded px-3 py-2"
        >
          Search
        </Link>
      </form>
    </div>
  );
};

export default Search;
