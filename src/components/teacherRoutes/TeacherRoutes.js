import { Navigate, Routes, Route } from "react-router-dom";
import TaskPage from "../../pages/taskpage/TaskPage";
import TaskDetails from "../taskDetails/TaskDetails";

function TeacherRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="tasks" />} />
        <Route path="Tasks/" element={<TaskPage />} />
        <Route path="Tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}
export default TeacherRoutes;
