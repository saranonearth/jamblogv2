import * as React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <>
      <header role="banner">
        <div className="top-bar">
          <div className="row"></div>
        </div>
        <div className="container logo-wrap">
          <div className="row pt-5">
            <div className="col-12 text-center">
              <a
                className="absolute-toggle d-block d-md-none"
                data-toggle="collapse"
                href="#navbarMenu"
                role="button"
                aria-expanded="false"
                aria-controls="navbarMenu"
              >
                <span className="burger-lines"></span>
              </a>
              <h1 className="site-logo">
                <a href="index.html">Just Another Magazine</a>
              </h1>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-md  navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Archive
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    Contributors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <p className="nav-link">|</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
