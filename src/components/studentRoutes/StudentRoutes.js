import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Hello from "../../components/hello/Hello";
import Menu from "../../components/menu/menu";

function StudentRoutes() {
  return (
    <div>
      <Menu role="student" />
      <Routes>
        <Route path="" element={<Navigate to="hello" />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </div>
  );
}
export default StudentRoutes;
