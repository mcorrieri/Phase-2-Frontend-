import React from "react";
import Button from "./components/Button";
// import logo from "./data/logo.png";
import styled from "styled-components";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <HeaderStyle>
      <nav>
        <img src="./data/logo.png" alt="Plenty of Lakes Logo" />

        <Button onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </Button>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  text-align: center;
`;
