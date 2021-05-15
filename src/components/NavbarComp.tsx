import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="navbar">
      {/* <div className="container d-flex justify-content-between"> */}
      <i
        className="fas fa-bars text-light d-md-none"
        onClick={() => setNav(!nav)}
      ></i>
      <div className="">
        <a href="#" className="nav-brand">
          {/* <img
              height={50}
              width={50}
              src="/images/logo.png"
              className="img-fluid"
              alt="logo image"
            /> */}
          MindSpire
        </a>
      </div>

      <div className="mobile-nav" style={{ left: nav ? "0" : "" }}>
        <div className="top">
          <img
            height={60}
            width={70}
            src="/images/logo.png"
            className="img-fluid d-md-none"
            alt="logo image"
          />

          <i
            className="fas fa-times d-md-none text-secondary"
            onClick={() => setNav(!nav)}
          ></i>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
