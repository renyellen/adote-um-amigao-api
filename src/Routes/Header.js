import React from "react";
import { Link } from "react-router-dom";

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">{rota}</Link>
          </li>
          <li>
            <Link to="/dog">{rota2}</Link>
          </li>
          <li>
            <Link to="/cat">{rota3}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
