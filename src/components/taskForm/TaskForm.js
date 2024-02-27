import "./taskForm.css";
import { useState } from "react";

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

  return (
    <div className="task-form">
      <form action="">
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div>
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={handleDuration}
          />
        </div>
        {/*<input type="text" name="title" onChange={(e) => handleTitle(e)} />*/}
        <button type="button" onClick={handleClick}>
          Add a task
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
