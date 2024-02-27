import Task from "../../components/task/Task";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/taskList/TaskList";
import { useState } from "react";

function TaskPage() {
  const steps = ["Enter the title", "click on the button"];
  const loading = false;
  const [tasks, setTasks] = useState([
    { _id: "1", title: "Learn Html", duration: "60" },
    { _id: "2", title: "Learn React", duration: "120" },
    { _id: "3", title: "Learn Angular", duration: "180" },
  ]);
  const [isVisible, setIsVisible] = useState(true);

  /*function sayHello(value) {
    //alert("Hello " + value);
  }*/
  function handleVisibility() {
    setIsVisible(!isVisible);
  }
  function addTask(title, duration) {
    console.log("title, duration: ", title, duration);
    const newTask = {
      _id: tasks.length + 1 + "",
      title: title,
      duration: duration,
    };
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
