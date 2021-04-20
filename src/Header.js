import React from "react";
import { Link } from "react-router-dom";

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
        <button>
          <Link to={"/login"}>Change User</Link>
        </button>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
      </nav>
    </div>
  );
}

export default Header;
