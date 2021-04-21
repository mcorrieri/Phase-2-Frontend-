import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <div>
      <nav>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotAzWmcGZ545cuqKy6ao_XLliET3bsJp2Ng&usqp=CAU"
          }
          alt="Plenty of Lakes Logo"
        />
        <h1>Plenty of Lakes</h1>

        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
      </nav>
    </div>
  );
}

export default Header;
