import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mb-8">

  <h1 className="text-3xl font-bold">
    Personal Task Manager
  </h1>

  <button onClick={() => navigate("/create-task")}
    className="
      bg-blue-600
      text-white
      px-5
      py-2
      rounded-lg
      hover:bg-blue-700
      transition
    "
  >
    + Add Todo
  </button>

</div>
  )
}

export default Navbar