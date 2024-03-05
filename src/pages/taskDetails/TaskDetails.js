import { useParams } from "react-router-dom";

function TaskDetails() {
  const params = useParams();
  const { id } = params;
  return <div>T{id}</div>;
}

export default TaskDetails;
