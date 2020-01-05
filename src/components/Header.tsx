import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Store from "../Store/Store";
import { auth } from "../utils/firebase";

const Header: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/archive">
                    Archive
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contributors">
                    Contributors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item no-mobile ">
                  <p className="nav-link">|</p>
                </li>

                {state.isAuth ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">
                        {state.user && state.user.name}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <p
                        className="nav-link"
                        onClick={async () => {
                          await auth.signOut();
                          dispatch({
                            type: "LOGOUT"
                          });
                        }}
                      >
                        Logout
                      </p>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
