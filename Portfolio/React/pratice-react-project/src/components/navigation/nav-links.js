import React from "react";
import { NavLink } from "react-router-dom";

const NavigationComp = () => {
  return (
    <div className="nav-link-wrapper">
      <NavLink exact to="/" activeClassName="nav-link-active">
        Home
      </NavLink>

      <NavLink to="/test" activeClassName="nav-link-active">
        Test
      </NavLink>

      <NavLink to="/about" activeClassName="nav-link-active">
        About
      </NavLink>

      <NavLink to="/contact" activeClassName="nav-link-active">
        Contact
      </NavLink>
    </div>
  );
};

export default NavigationComp;
