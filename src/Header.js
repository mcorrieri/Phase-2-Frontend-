import React from "react";
import styled from "styled-components";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <HeaderStyle>
      <nav>
        <HeaderImg src="logo.png" alt="Plenty of Lakes Logo" />

        <DarkBtn onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </DarkBtn>
      </nav>
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
font-size: 16px;
font-weight: bolder;
border-radius: 3px;
color: darkblue;
border: 2px solid darkblue;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
position: absolute;
right: 0;
top: 0;

&:hover {
background-color: darkblue;
color: white;
}
`;

// const NavBarStyle = styled.nav `

// `;