import "./task.css";
import { useState } from "react";

function Task(props) {
  const [id, setId] = useState("Learn");
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [duration, setDuration] = useState(props.duration);

  function handleDelete() {
    props.deleteTask(props._id);
  }
  function handleUpdate() {
    console.log("Updated Title:", title);
    console.log("Updated Duration:", duration);
    props.updateTask(props._id, title, duration);
    setIsEditing(false);
  }
  return (
    <div
      className={`task ${props.duration <= 60 ? "custom-task" : ""}`}
      style={{ backgroundColor: "#e6d7ff" }}
    >
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button onClick={handleUpdate}>Update a Task</button>
        </div>
      ) : (
        <div>
          <div className="title">{props.title}</div>
          <div className="title">{props.duration}</div>
        </div>
      )}

      {props.details && (
        <>
          <div className="title">{props.details.difficulty}</div>
          <div className="title">{props.details.level}</div>
        </>
      )}
      <div className="actions">
        {!isEditing && <button onClick={handleDelete}>Delete</button>}
        {!isEditing && (
          <button onClick={() => setIsEditing(true)}>Update</button>
        )}
      </div>
    </div>
  );
}
export default Task;
