const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 mt-6 mb-6">

      <button
        onClick={() => setFilter("all")}
        className={`px-5 py-2 rounded-lg font-medium transition-all duration-200
        ${
          filter === "all"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All Tasks
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`px-5 py-2 rounded-lg font-medium transition-all duration-200
        ${
          filter === "active"
            ? "bg-green-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-5 py-2 rounded-lg font-medium transition-all duration-200
        ${
          filter === "completed"
            ? "bg-purple-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Completed
      </button>

    </div>
  );
};

export default FilterBar;