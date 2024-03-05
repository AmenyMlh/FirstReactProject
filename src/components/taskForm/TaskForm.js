import "./taskForm.css";
import { useState, useEffect } from "react";

function TaskForm(props) {
  const [title, setTitle] = useState("Learn");
  const [duration, setDuration] = useState(0);
  //props.sayHello("Learn JS");
  function handleTitle(e) {
    console.log("e : ", e);
    setTitle(e.target.value);
  }
  function handleDuration(d) {
    console.log("d : ", d);
    setDuration(d.target.value);
  }
  function handleClick() {
    props.addTask(title, duration);
  }
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="taskForm">
      <form action="" className="form">
        <input type="text" name="title" onChange={handleTitle} />
        <br />
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Add a task
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
