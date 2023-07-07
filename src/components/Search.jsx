import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from "react-feather";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <div className="nav-link">
      <form className='flex'>
        <input
          type="text"
          value={searchQuery} //supaya ketika di enter, nilai di dalam kolom tidak hilang
          onChange={(e) => setSearchQuery(e.target.value)} //Ketika ada input di submit, akan set sesuai nilai yg dimasukin
          className="text-black border border-gray-300 rounded px-1 max-w-[9rem]"
          placeholder="Search..."
        />
        <Link
          to={`/search?query=${encodeURIComponent(searchQuery)}`}
          className=" ml-2 text-sm bg-gray-300 text-gray-700 rounded px-1 py-1 hover:bg-[#232324] hover:text-gray-300 transition ease-in-out duration-[350ms]"
        >
            <Icon.Search/>
        </Link>
      </form>
    </div>
    </>
  );
};

export default Search;
