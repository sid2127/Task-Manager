import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, fetchTasks }) => {

  const navigate = useNavigate();

  const overdue =
    !task.completed &&
    task.dueDate &&
    new Date(task.dueDate) < new Date();


const handleDeleteTask = async () => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {

    await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/task/deleteTask/${task._id}`
    );

    fetchTasks();

  } catch (error) {
    console.log(error);
  }
};

  const handleToggleTask = async () => {

    try {

      await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/task/toggleTaskStatus/${task._id}`
      );

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`
        border rounded-xl p-5 shadow-sm
        transition-all duration-200

        ${
          task.completed
            ? "bg-green-50 border-green-300"
            : "bg-white"
        }
      `}
    >

      {/* Top Row */}

      <div className="flex items-start justify-between">

        <div>

          <h2
            className={`
              text-xl font-bold

              ${
                task.completed
                  ? "line-through text-gray-500"
                  : ""
              }
            `}
          >
            {task.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

        </div>

        {/* Checkbox */}

        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleTask}
          className="
            h-6
            w-6
            cursor-pointer
          "
        />

      </div>

      {/* Due Date */}

      <div className="mt-4">

        <p className="text-sm text-gray-600">

          Due :

          {" "}

          {
            task.dueDate
              ? new Date(
                  task.dueDate
                ).toLocaleDateString()
              : "No Due Date"
          }

        </p>

      </div>

      {/* Overdue */}

      {
        overdue && (
          <div className="mt-2">

            <span
              className="
                text-red-600
                font-semibold
                text-sm
              "
            >
              ⚠ OVERDUE
            </span>

          </div>
        )
      }

      {/* Completed Badge */}

      {
        task.completed && (
          <div className="mt-2">

            <span
              className="
                text-green-700
                font-semibold
                text-sm
              "
            >
              ✓ Completed
            </span>

          </div>
        )
      }

      {/* Actions */}

      <div className="flex gap-3 mt-5">

        <button
          onClick={() =>
            navigate(`/edit-task/${task._id}`)
          }
          className="
            px-4
            py-2
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
          "
        >
          Edit
        </button>

        <button
          className="
            px-4
            py-2
            rounded-lg
            bg-red-600
            text-white
            hover:bg-red-700
          "
          onClick={handleDeleteTask}
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TaskCard;