import { useState } from "react";
import "./task.css";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { updateTask } from "../../services/tasks.service";

function Task(props) {
  // console.log(props);
  const [toggle, setToggle] = useState(true);
  const [title, setTitle] = useState(props.title);
  const [duration, setDuration] = useState(props.duration);
  const [titleToUpdate, setTitleToUpdate] = useState(props.title);
  const [durationToUpdate, setDurationToUpdate] = useState(props.duration);

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  /*function handleClick(e) {
    // console.log("update Click", title);
    const task = {
      _id: props._id,
      title,
      duration,
    };
    props.updateTask(task);
    setToggle(true);
  }*/
  /*function handleUpdate() {
    props.updateTask(props._id, titleToUpdate, durationToUpdate);
    setIsUpdatedMode(false);
  }*/
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.duration > 50) {
      navigate("/tasks/" + props._id);
    }
  };
  return (
    <div
      className={`task ${props.duration <= 60 ? "custom-task" : ""}`}
      style={{ backgroundColor: "#d692df" }}
    >
      {toggle ? (
        <>
          {/*<Link to={"/tasks/" + props._id} className="title">*/}
          {/*props.title*/}
          {/*</Link>*/}
          <div className="=title" onClick={handleClick}>
            {props.title}
          </div>
          <div className="title">{props.duration}</div>
          {props.details && (
            <div className="title">{props.details.difficulty}</div>
          )}
          <div className="actions">
            <button onClick={() => props.deleteTask(props._id)}>delete</button>
            <button onClick={() => setToggle(false)}>update</button>
          </div>
        </>
      ) : (
        <form action="" className="form">
          <input
            type="text"
            name="title"
            onChange={handleTitle}
            value={title}
          />
          <br />
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleClick}>
            update task
          </button>
        </form>
      )}
    </div>
  );
}

export default Task;
