import React from "react";
import logo from "../assets/images/logo.svg";
import avatar1 from "../assets/images/avatar1.jpg";

const Navbar = () => {
  return (
    <div className="container bg-background-color w-auto">
      <nav className="navbar flex items-center justify-between gap-5 px-3 py-6">
        <div className="flex items-center gap-12">
          <div className="codelabs_logo">
            <img src={logo} alt="avatar_lady" />
          </div>
          <ul className="navlist flex space-x-8 list-none items-center">
            <li>
              <a
                className="no-underline text-main-color"
                href="./signup.html"
                target="_blank"
              >
                Challenges
              </a>
            </li>
            <li>
              <a
                className="no-underline text-main-color"
                href="./signup.html"
                target="_blank"
              >
                Leaderboard
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={avatar1}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-main-color">John Smith</p>
          </div>
          <div>
            <label className="theme-toggle">
              <input type="checkbox" className="theme-toggle-checkbox" />
              <span className="theme-toggle-slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
