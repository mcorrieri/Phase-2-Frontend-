import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header({ onDarkModeClick, isDarkMode, user, id }) {
  return (
    <HeaderStyle>
      <NavBarStyle>
        <Link to="/home">
          <HeaderImg src="logo.png" alt="Plenty of Lakes Logo" />
        </Link>
        {user ? 
        <Link to={`lakePerson/${id}`}>
          <h1>Welcome, {user}!</h1>
         </Link> : null
        }
        <DarkBtn onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </DarkBtn>
      </NavBarStyle>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  text-align: center;
`;

const HeaderImg = styled.img`
  max-width: 300px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const DarkBtn = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: large;
  font-family: Garamond;
  border-radius: 3px;
  color:  rgb(83, 143, 83);
  border: 2px solid sandybrown;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: sandybrown;
    color: white;
    border: 2px solid sandybrown;
  }
`;

const NavBarStyle = styled.nav `
  padding: 10px;
`;
