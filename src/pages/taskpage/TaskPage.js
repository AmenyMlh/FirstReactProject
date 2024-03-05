import Task from "../../components/task/Task";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/taskList/TaskList";
import { useEffect, useState } from "react";
import * as api from "../../services/tasks3.service";

function TaskPage() {
  const steps = ["Enter the title", "click on the button"];
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  async function fetchData() {
    try {
      setLoading(true);
      setError(false);
      const tasks = await api.fetchTasks();
      setTasks(tasks);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  const [searchValue, setSearchValue] = useState("");
  // 2ème forme de useEffect
  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const tasks = await api.fetchTasks();
        setTasks(tasks);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  /*function SayHello(value) {
    alert("hello" + value);
  }*/
  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty");
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       console.log("tasks from api : " + searchValue);
  //       setTasks(result);
  //       setLoading(false);
  //     }
  //   };
  //   console.log("searchValue", searchValue);
  //   fetchData();
  // }, [searchValue]);

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false;
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (!searchValue) {
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       if (!didCancel) {
  //         console.log("result: ", searchValue);

  //         setTasks(result);
  //         setLoading(false);
  //       }
  //     }
  //   };
  //   // console.log("useEffect:", searchValue)
  //   fetchData();

  //   return () => {
  //     console.log("cleanup: ", searchValue);
  //     didCancel = true;
  //   };
  // }, [searchValue]);

  /*function sayHello(value) {
    //alert("Hello " + value);
  }*/
  function handleVisibility() {
    setIsVisible(!isVisible);
  }
  async function addTask(title, duration) {
    const newTask = await api.addTask({ title, duration });
    /*console.log("title, duration: ", title, duration);
    const newTask = {
      _id: tasks.length + 1 + "",
      title: title,
      duration: duration,
    };*/
    //setTasks([tasks.concat(newTask)]);
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item._id !== id));
  }
  function updateTask(id, updatedTitle, updatedDuration) {
    setTasks(
      tasks.map((task) =>
        task._id === id
          ? { ...task, title: updatedTitle, duration: updatedDuration }
          : task
      )
    );
  }
  return (
    <div className="task-page">
      <ul>
        {steps.map((step) => {
          return <li key={step.index}> {step}</li>;
        })}
      </ul>
      {/*<button onClick={handleVisibility}>Toggle visibility</button>*/}
      <button onClick={() => handleVisibility()}>Toggle visibility</button>
      <input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <TaskForm addTask={addTask} />
      {/* {loading ? (
        <div>is loading</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}

      {error && <div>Error ... </div>}
      {loading && <div>is loading...</div>}
      {!loading && isVisible && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        /*<>
          <Task
            title="learn html"
            duration={80}
            details={{ difficulty: 8, level: "level 1" }}
          />
          <Task
            title="learn React"
            duration={60}
            details={{ difficulty: 10, level: "level 2" }}
          />
          <Task
            title="learn JS"
            duration={70}
            details={{ difficulty: 12, level: "level 3" }}
          />
        </>*/
      )}
    </div>
  );
}

export default TaskPage;
