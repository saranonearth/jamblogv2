import * as React from "react";
import { Link } from "react-router-dom";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p className="mb-4">
                <img
                  src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.0-9/56790817_822034391465277_8128112783184101376_o.jpg?_nc_cat=109&_nc_oc=AQl0fNvIG92ySGMH7cm_2_b55zMuiedGGy2KaRQrug3ay3WgAfG7A25ryPpJuWvxnqs&_nc_ht=scontent.fdel29-1.fna&oh=2d7af0ae28b0d41ff57be2fa3de7029e&oe=5EA19DCE"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </p>

              <p>
                Lorem ipsum dolor sit amet sa ksal sk sa, consectetur
                adipisicing elit. Ipsa harum inventore reiciendis.{" "}
                <Link to="/about">Read More</Link>
              </p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="row">
                <div className="col-md-1"></div>

                <div className="col-md-4">
                  <div className="mb-5">
                    <h3>Follow us on</h3>
                    <ul className="list-unstyled footer-social">
                      <li>
                        <a href="#">
                          <span className="fa fa-facebook"></span> Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-instagram"></span> Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="small">Made with ❤️ by Just Another Magazine</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
