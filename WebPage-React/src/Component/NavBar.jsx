import { NavLink } from "react-router-dom"


const NavBar = () => {
  return <nav>
    <div className="menuIcon">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>

      </ul>

    </div>
  </nav>
}

export default NavBar
