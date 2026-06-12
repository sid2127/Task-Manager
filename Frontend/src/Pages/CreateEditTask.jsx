import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import TaskForm from "../Components/TaskForm";

function CreateEditTask() {

  const navigate = useNavigate();

  const { taskId } = useParams();

  const editing = !!taskId;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Fetch task when editing

  useEffect(() => {

    if (editing) {
      fetchTask();
    }

  }, [taskId]);

  const fetchTask = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/task/getTaskById/${taskId}`
      );

      const task = response.data.data;

      setTitle(task.title);
      setDescription(task.description);

      setDueDate(
        task.dueDate
          ? task.dueDate.split("T")[0]
          : ""
      );

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editing) {

        await axios.put(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/task/updateTask/${taskId}`,
          {
            title,
            description,
            dueDate
          }
        );

      } else {

        await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/task/createTask`,
          {
            title,
            description,
            dueDate
          }
        );
      }

      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-6">

        {
          editing
            ? "Edit Task"
            : "Create Task"
        }

      </h1>

      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        handleSubmit={handleSubmit}
        editing={editing}
      />

    </div>
  );
}

export default CreateEditTask;