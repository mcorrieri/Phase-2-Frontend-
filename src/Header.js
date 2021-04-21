import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onDarkModeClick, isDarkMode }) {
  const [login, setLogin] = useState(true);
  let loginBtn = "";

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
        <button onClick={()=>setLogin(!login)}>
          {login ? loginBtn="Login" : loginBtn="Logout"} 
          <Link to={"/"}>{loginBtn}</Link>
        </button>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
      </nav>
    </div>
  );
}

export default Header;
