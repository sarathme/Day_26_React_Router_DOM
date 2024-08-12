import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul role="list" className="navbar">
        <li>
          <NavLink to="all">All</NavLink>
        </li>
        <li>
          <NavLink to="full-stack">Full Stack Development</NavLink>
        </li>
        <li>
          <NavLink to="datascience">Data Science</NavLink>
        </li>
        <li>
          <NavLink to="cyber-security">Cyber Security</NavLink>
        </li>
        <li>
          <NavLink to="career">Career</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
