import { BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import TaskPage from "./pages/taskpage/TaskPage";
import Hello from "./components/hello/Hello";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/menu";
import TaskDetails from "./pages/taskDetails/TaskDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/Tasks/" element={<TaskPage />} />
          <Route path="/Tasks/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
      {/* <Hello />
      <TaskPage /> */}
    </div>
  );
}

export default App;
