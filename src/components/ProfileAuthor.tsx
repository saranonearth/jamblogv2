import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { firestore } from "../utils/firebase";
import ArticleCard from "./ArticleCard";

interface Props extends RouteComponentProps {}
interface state {
  articles: Array<object | any>;
  profile: object | any;
  loading: boolean;
}
const ProfileAuthor: React.FC<Props | any> = props => {
  const userId = props.match.params.id;
  const [state, setState] = useState<state>({
    articles: [],
    profile: {},
    loading: true
  });
  useEffect(() => {
    window.scrollTo(0, 0);

    firestore
      .collection("users")
      .where("Id", "==", `${userId}`)
      .get()
      .then(res => {
        const user = res.docs[0].data();

        firestore
          .collection("articles")
          .where("authorId", "==", `${userId}`)
          .get()
          .then(res => {
            let temp: Array<object> = [];
            res.forEach(d => {
              temp.push(d.data());
            });

            setState({
              ...state,
              articles: temp,
              profile: user,
              loading: false
            });
          });
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="mt-3">
          <br />
          <br />
          {state.loading ? (
            <p>Loading..</p>
          ) : state.articles.length > 0 ? (
            <div className="flex">
              <div className="p-p">
                <div className="sidebar-box">
                  <div className="bio text-center">
                    <img
                      src={state.profile.image}
                      alt="Image Placeholder"
                      className="img-fluid"
                    />
                    <div className="bio-body">
                      <h2> {state.profile.name}</h2>
                      <p>{state.profile.bio}</p>
                      <p>
                        <p>
                          Articles Contributed : {state.profile.articleCount}
                        </p>
                      </p>
                      {/* <p className="social">
                              <a href="#" className="p-2">
                                <span className="fa fa-facebook"></span>
                              </a>
                              <a href="#" className="p-2">
                                <span className="fa fa-twitter"></span>
                              </a>
                              <a href="#" className="p-2">
                                <span className="fa fa-instagram"></span>
                              </a>
                              <a href="#" className="p-2">
                                <span className="fa fa-youtube-play"></span>
                              </a>
                            </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="a-p">
                <div className="row blog-entries">
                  <div className="col-md-12 col-lg-11 main-content">
                    <div className="row">
                      {state.articles.map(d => (
                        <ArticleCard article={d} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>{state.profile.name} hasn't contributed any articles yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAuthor;
