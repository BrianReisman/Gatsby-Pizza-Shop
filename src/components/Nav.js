import React from "react";
import { Link, navigate } from "gatsby";

const Nav = () => {
  const goToSliceMasters = () => {
    // 1. wait for 2 seconds
    setTimeout(() => {
      navigate("/slicemasters");
    }, 2000);
    // 2. change the page
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizza">Pizzas (pizza or pizzas?) Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
