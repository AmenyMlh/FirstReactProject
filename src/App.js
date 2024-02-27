import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello/Hello";
import TaskPage from "./pages/taskpage/TaskPage";

function App() {
  return (
    <div className="App">
      <Hello />
      <TaskPage />
    </div>
  );
}

export default App;
