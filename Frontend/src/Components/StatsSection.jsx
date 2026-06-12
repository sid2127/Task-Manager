const StatsSection = ({
  tasks,
  filter,
  setFilter
}) => {

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const active = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

      {/* Total */}
      <div
        onClick={() => setFilter("all")}
        className={`cursor-pointer rounded-xl p-5 border transition-all duration-200
          ${
            filter === "all"
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
      >
        <h3 className="text-lg font-semibold">
          Total Tasks
        </h3>

        <p className="text-3xl font-bold mt-2">
          {total}
        </p>
      </div>

      {/* Active */}
      <div
        onClick={() => setFilter("active")}
        className={`cursor-pointer rounded-xl p-5 border transition-all duration-200
          ${
            filter === "active"
              ? "bg-green-600 text-white border-green-600 shadow-lg"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
      >
        <h3 className="text-lg font-semibold">
          Active Tasks
        </h3>

        <p className="text-3xl font-bold mt-2">
          {active}
        </p>
      </div>

      {/* Completed */}
      <div
        onClick={() => setFilter("completed")}
        className={`cursor-pointer rounded-xl p-5 border transition-all duration-200
          ${
            filter === "completed"
              ? "bg-purple-600 text-white border-purple-600 shadow-lg"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
      >
        <h3 className="text-lg font-semibold">
          Completed Tasks
        </h3>

        <p className="text-3xl font-bold mt-2">
          {completed}
        </p>
      </div>

    </div>
  );
};

export default StatsSection;