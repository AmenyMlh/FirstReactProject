import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  if (props.role === "teacher") {
    return (
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="/teachers/tasks"
              style={(params) =>
                params.isActive ? { color: "red" } : undefined
              }
            >
              My tasks list
            </NavLink>
            {/* <Link to="/tasks"> My tasks list</Link> */}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="/students/hello"
              style={(params) =>
                params.isActive ? { color: "red" } : undefined
              }
            >
              Hello
            </NavLink>
            {/* <Link to="/hello">Hello</Link> */}
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
