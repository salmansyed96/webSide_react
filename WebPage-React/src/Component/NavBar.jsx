import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

const Nav = styled.nav`
.navbar-list{
  display:flex;
  gap: 4.8rem;
li{
  list-style:none;
  
}
  
}
`


const NavBar = () => {
 
  //const Nav = styled.nav
  

  

  
  return <Nav>
    <div className="menuIcon">
      <ul className="navbar-list">
        <li>
          <NavLink className={"NavBar-bar"} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={"NavBar-bar"} to="/About">About</NavLink>
        </li>
        <li>
          <NavLink className={"NavBar-bar"} to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink className={"NavBar-bar"} to="/Contact">Contact</NavLink>
        </li>

      </ul>

    </div>
  </Nav>
  
}



export default NavBar
