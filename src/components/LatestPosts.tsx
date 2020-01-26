import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { firestore } from "../utils/firebase";
interface Props {}
interface state {
  articles: Array<object>;
  loading: boolean;
}
const LatestPosts: React.FC<Props> = () => {
  const [state, setState] = React.useState<state>({
    articles: [],
    loading: true
  });
  React.useEffect(() => {
    firestore
      .collection("articles")
      .orderBy("date", "desc")
      .limit(6)
      .get()
      .then(res => {
        let temp: Array<object> = [];

        res.forEach(d => {
          temp.push(d.data());
        });
        setState({
          ...state,
          articles: temp,
          loading: false
        });
      });
  }, []);

  console.log(state);
  return (
    <div>
      <section className="site-section py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4 cf">Latest Posts</h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                {state.loading ? (
                  <p>Loading...</p>
                ) : (
                  state.articles.map(article => (
                    <ArticleCard key={Math.random()} article={article} />
                  ))
                )}
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
                      <Link
                        to="/about"
                        className="btn btn-primary btn-sm rounded color"
                      >
                        Read more
                      </Link>
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
