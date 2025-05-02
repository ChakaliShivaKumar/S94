import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav
    role="navigation"
    aria-label="Main menu"
    itemScope
    itemType ='https://schema.org/SiteNavigationElement'
    className="menu"
    >
    <ul>
      <li><Link itemProp="url" to="./home" title="Login">Home</Link></li>
      <li>
        <Link
          itemProp="url"
          to="./about"
          title="About page"
          aria-label="Head to About Page"
          >About</Link>
      </li>
      <li>
        <Link
          itemProp="url"
          to="./"
          title="Login page"
          aria-label="Head to Login Page"
          >Login</Link>
      </li>
    </ul>
</nav>
  );
}

export default Menu;
