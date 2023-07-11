import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"


const Header = () => {
  return (
   <header>
    <NavLink to="/">
        <img src="logo1.png" alt="logo"/>

    </NavLink>
    <NavBar/>
   </header>
  )
}

export default Header
