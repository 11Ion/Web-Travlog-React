import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../img/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import menu from "../../img/menu.svg";
import close_btn from "../../img/close_btn.svg";
const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkOverlay, setDarkOverlay] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDarkOverlay(!mobileMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (
      mobileMenuOpen &&
      e.target.closest(".mobile__menu") === null &&
      e.target.closest(".menu") === null
    ) {
      setMobileMenuOpen(false);
      setDarkOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, );

  return (
    <>
         <div className={`mobile__menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile__menu__close" onClick={toggleMobileMenu}>
          <img src={close_btn} draggable="false" alt="img"/>
        </div>
        <ul className="mobile__menu__links">
          <li className="mobile__menu__link">
            <NavLink to="/" onClick={toggleMobileMenu}>
              <img src={logo} alt="logo"/>
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/discover" onClick={toggleMobileMenu}>
              Discover
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/special-deals" onClick={toggleMobileMenu}>
              Special Deals
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/contact" onClick={toggleMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li className="mobile__menu__link mob__log">
            <NavLink to="/login" onClick={toggleMobileMenu}>
              Log In
            </NavLink>
          </li>
          <li className="mobile__menu__link mob__reg">
            <NavLink to="/signup" onClick={toggleMobileMenu}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    <nav className="Nav">
      <div className='container'>
        <div className="menu" onClick={toggleMobileMenu}>
          <img src={menu} alt="logo" draggable="false" />
        </div>
        <NavLink to="/" className="nav__logo">
          <img src={logo} alt="logo" draggable="false" />
          Travlog
        </NavLink>

        <ul className="nav__links">
          <li className="nav__link">
            <NavLink
              to="/"
              className={
                location.pathname === "/"
                  ? "nav__link_a active"
                  : "nav__link_a"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink
              to="/discover"
              className={
                location.pathname === "/discover"
                  ? "nav__link_a active"
                  : "nav__link_a"
              }
            >
              Discover
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink
              to="/special-deals"
              className={
                location.pathname === "/special-deals"
                  ? "nav__link_a active"
                  : "nav__link_a"
              }
            >
              Special Deals
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav__link_a active"
                  : "nav__link_a"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav__connect">
          <div className="nav__log">
            <NavLink to="/login" className="nav__log__link">
              Log In
            </NavLink>
          </div>
          <div className="nav__reg">
            <NavLink to="/signup" className="nav__reg__link">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`dark ${darkOverlay ? "dark-overlay" : ""}`}></div>
    </nav>
    </>
  );
};

export default Navbar;
