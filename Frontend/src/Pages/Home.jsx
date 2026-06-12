import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import TaskList from "../components/TaskList.jsx";

const Home = () => {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  const [search, setSearch] = useState("");

  const handleDragEnd = async (result) => {

  if (!result.destination) return;

  const items = [...filteredTasks];

  const [reorderedItem] =
    items.splice(result.source.index, 1);

  items.splice(
    result.destination.index,
    0,
    reorderedItem
  );

  setTasks(items);

//   try {

//   await axios.patch(
//     `${import.meta.env.VITE_SERVER_URL}/api/v1/task/reorderTasks`,
//     {
//       tasks: items.map((task, index) => ({
//         id: task._id,
//         order: index
//       }))
//     }
//   );

// } catch (error) {
//   console.log(error);
// }
};

  const fetchTasks = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/task/getAllTasks`
      );

      setTasks(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "active") {
      return !task.completed && matchesSearch;
    }

    if (filter === "completed") {
      return task.completed && matchesSearch;
    }

    return matchesSearch;

  });

  return (
    <div className="max-w-5xl mx-auto p-5">

      {/* Navbar */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Personal Task Manager
        </h1>

        <button
          onClick={() => navigate("/create-task")}
          className="
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-lg
            hover:bg-blue-700
            transition-all
          "
        >
          + Add Todo
        </button>

      </div>

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Filter Buttons */}

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {/* Tasks */}

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
        handleDragEnd={handleDragEnd}
      />

    </div>
  );
};

export default Home;