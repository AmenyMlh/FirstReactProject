import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/hello"
            style={(params) => (params.isActive ? { color: "red" } : undefined)}
          >
            Hello
          </NavLink>
          {/* <Link to="/hello">Hello</Link> */}
        </li>
        <li>
          <NavLink
            to="/tasks"
            style={(params) => (params.isActive ? { color: "red" } : undefined)}
          >
            My tasks list
          </NavLink>
          {/* <Link to="/tasks"> My tasks list</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
