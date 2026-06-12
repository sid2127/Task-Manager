import { FiSearch } from "react-icons/fi";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative mb-6">

      <FiSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-500
        "
      />

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          rounded-xl
          py-3
          pl-12
          pr-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

    </div>
  );
};

export default SearchBar;