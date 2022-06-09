import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="Nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>

      <Link to="/currencies">
        <div> CURRENCIES</div>
      </Link>
    </nav>
  );
};
export default Nav;
