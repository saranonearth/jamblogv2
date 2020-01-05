import * as React from "react";

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
                  src="https://via.placeholder.com/400x200"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </p>

              <p>
                Lorem ipsum dolor sit amet sa ksal sk sa, consectetur
                adipisicing elit. Ipsa harum inventore reiciendis.{" "}
                <a href="#">Read More</a>
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
