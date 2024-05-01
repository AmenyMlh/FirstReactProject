import { BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Menu from "./components/menu/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes";
import StudentRoutes from "./components/studentRoutes/StudentRoutes";
import { me } from "./services/tasks3.service";
import Login from "./pages/login/Login";

function App() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me();
        setUser(user);
        console.log("user: ", user);
      } catch (e) {}
    };
    fetchMe();
  }, []);
  if (token && user.role === "admin") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="teachers/*" element={<TeacherRoutes />} />
            <Route path="students/*" element={<StudentRoutes />} />
          </Routes>
        </Router>
        {/* <Hello />
      <TaskPage /> */}
      </div>
    );
  } else if (token && user.role === "user") {
    return (
      <div className="app">
        <Router>
          <Menu />
          {/* ... */}
        </Router>
      </div>
    );
  } else if (!token) {
    // public routes
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default App;
