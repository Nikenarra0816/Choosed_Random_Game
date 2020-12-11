import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Catch The Hearthstone</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Hero</Link>
            </li>

            <li>
              <Link to="/minion">Minion</Link>
            </li>

            <li>
              <Link to="/spell">Spell</Link>
            </li>

            <li>
              <Link to="/enchantment">Enchantment</Link>
            </li>

            <li>
              <Link to="/weapon">Weapon</Link>
            </li>

            <li>
              <Link to="/heropower">Hero Power</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
