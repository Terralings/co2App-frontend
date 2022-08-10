import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ classState, handleClick, user }) {
  return (
    <div className={`${classState}` + " nav"}>
      <nav className="nav-container">
        <div className="top-nav">
          <button
            className="closebtn-container"
            id="closebtn"
            onClick={handleClick}
          >
            <span className="closebtn">&times;</span>
          </button>
          <div className="logo-container">
            <Link to="/">
              <img
                src="/Assets/BLACK_LOGO.png"
                alt="ZeroCarbon logo"
                className="darkLogo"
                onClick={handleClick}
              />
            </Link>
          </div>
          <ul className="ul-top">
            <Link to="/about" className="nav-item" onClick={handleClick}>
              ABOUT
            </Link>
            <Link to="/comingsoon" className="nav-item" onClick={handleClick}>
              RESOURCES
            </Link>
            <Link to="/comingsoon" className="nav-item" onClick={handleClick}>
              GET INVOLVED
            </Link>
          </ul>
        </div>
        {user ? (
          <ul className="bottom-nav">
            <Link to="/account" className="nav-item" onClick={handleClick}>
              Account
            </Link>
            <Link to="/comingsoon" className="nav-item" onClick={handleClick}>
              Contact Us
            </Link>
          </ul>
        ) : (
          <ul className="bottom-nav">
            <Link to="/comingsoon" className="nav-item" onClick={handleClick}>
              Contact Us
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
