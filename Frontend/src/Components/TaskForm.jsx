const TaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  handleSubmit,
  editing
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
        className="w-full border p-3"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>
          setDescription(e.target.value)
        }
        className="w-full border p-3"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e)=>
          setDueDate(e.target.value)
        }
        className="w-full border p-3"
      />

      <button
        className="bg-black text-white px-4 py-2 rounded"
      >
        {
          editing
          ? "Update Task"
          : "Create Task"
        }
      </button>

    </form>
  );
};

export default TaskForm;