import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="logo">Community</h2>
      <nav>
        <ul className="nav-links">
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#">Home ▾</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/add-member">Add Members</Link>
                </li>
                <li>
                  <a href="#">Edit Members</a>
                </li>
                <li>
                  <a href="#">Register Members</a>
                </li>
                {/* <li>
                  <a href="#"> Members</a>
                </li> */}
              </ul>
            )}
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
