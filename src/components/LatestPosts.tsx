import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { firestore } from "../utils/firebase";
interface Props {}
interface state {
  articles: Array<object | any>;
  leaderboard: Array<object | any>;
  loading: boolean;
  lbloading: boolean;
}
const LatestPosts: React.FC<Props> = () => {
  const [state, setState] = React.useState<state>({
    articles: [],
    leaderboard: [],
    loading: false,
    lbloading: true
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
        firestore
          .collection("users")
          .orderBy("articleCount", "desc")
          .limit(5)
          .get()
          .then(res => {
            let lb: Array<object> = [];

            res.forEach(d => {
              lb.push(d.data());
            });
            setState({
              ...state,
              leaderboard: lb,
              lbloading: false,
              articles: temp,
              loading: false
            });
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
                <h3 className="heading">Leaderboard</h3>
                <ul className="categories">
                  {state.lbloading ? (
                    <p>Loading</p>
                  ) : state.leaderboard.length > 0 ? (
                    state.leaderboard.map(e => (
                      <li key={e.Id}>
                        <Link to={`/profile/${e.Id}`}>
                          <img
                            className="img-lb circle"
                            src={e.image}
                            alt={e.name}
                          />{" "}
                          {e.name}
                          <span>{e.articleCount} Articles</span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>None</p>
                  )}
                </ul>
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestPosts;
