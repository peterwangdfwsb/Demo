import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-success py-2">
      <nav className="navbar bg-success navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <h1>Users</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;