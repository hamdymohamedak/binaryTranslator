import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <ul className="NavParnet">
        <li> <Link to={"/"}>Binary</Link> </li>
        <li> <Link to={"/TextToBinary"}>Text</Link> </li>
    </ul>
  );
}

export default NavBar;
