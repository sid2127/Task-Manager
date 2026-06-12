import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateEditTask from "./Pages/CreateEditTask";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/create-task"
        element={<CreateEditTask />}
      />

      <Route
        path="/edit-task/:taskId"
        element={<CreateEditTask />}
      />
    </Routes>
  );
}

export default App;