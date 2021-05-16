import React, { useState } from "react";
import { Anchor } from "antd";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { Link } = Anchor;
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
            <Anchor
              onClick={() => setNav(!nav)}
              affix={false}
              showInkInFixed={false}
            >
              <Link href="#home" title="Home" />
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor
              onClick={() => setNav(!nav)}
              affix={false}
              showInkInFixed={false}
            >
              <Link href="#courses" title="Courses" />
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor
              onClick={() => setNav(!nav)}
              affix={false}
              showInkInFixed={false}
            >
              <Link href="#about" title="About Us" />
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor
              onClick={() => setNav(!nav)}
              affix={false}
              showInkInFixed={false}
            >
              <Link href="#contact-us" title="Contact Us" />
            </Anchor>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
