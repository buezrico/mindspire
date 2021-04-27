import React from "react";

const Navbar = () => {
  return (
    <nav className="nav bg-white">
      <div className="container d-flex justify-content-between">
        <button className="btn">
          <a href="#">
            <img
              height={50}
              width={50}
              src="/images/logo.png"
              className="img-fluid"
              alt="logo image"
            />
          </a>
        </button>

        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link active">
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
    </nav>
  );
};

export default Navbar;
