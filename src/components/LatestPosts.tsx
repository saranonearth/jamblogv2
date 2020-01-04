import React from "react";

interface Props {}

const LatestPosts: React.FC<Props> = () => {
  return (
    <div>
      <section className="site-section py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4">Latest Posts</h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                <div className="col-md-6">
                  <a href="blog-single.html" className="blog-entry ">
                    <img
                      src="https://via.placeholder.com/800x534"
                      alt="Image placeholder"
                    />
                    <div className="blog-content-body">
                      <div className="post-meta">
                        <span className="author mr-2">
                          <img
                            src="https://via.placeholder.com/30"
                            alt="Colorlib"
                          />
                        </span>
                        <span className="mr-2">January 05, 2020 </span>
                        <span className="ml-2">
                          <span className="fa fa-comments">Likes</span> 3
                        </span>
                      </div>
                      <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus, quos!
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      id="s"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div> */}
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box">
                <div className="bio text-center">
                  <div>
                    <h2>About JAM</h2>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Exercitationem facilis sunt repellendus excepturi beatae
                      porro debitis voluptate nulla quo veniam fuga sit
                      molestias minus.
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-sm rounded color"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="sidebar-box">
                <h3 className="heading">Leaderboard</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      <img
                        src="https://via.placeholder.com/30"
                        className="circle"
                        alt=""
                      />{" "}
                      Person 1 <span>12 ❤</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestPosts;
