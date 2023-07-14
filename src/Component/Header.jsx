import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import Image from "../Images/OneWeb_Logo.png";

const Header = () => {
  // Line number 11 Image path must be given like this, then i have use Tailwind css use that
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Image} alt="logo" className="w-80" />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
