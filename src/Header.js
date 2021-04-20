import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <nav>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotAzWmcGZ545cuqKy6ao_XLliET3bsJp2Ng&usqp=CAU"} alt="Plenty of Lakes Logo"/>
            <h1>Plenty of Lakes</h1>
            <button><Link to={`lakes/login`}>Change User</Link></button>
            </nav>
            
        </div>
    )
}

export default Header;