import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { firestore } from "../utils/firebase";
import ReactHtmlParser from "react-html-parser";
interface Props extends RouteComponentProps<any> {}
interface state {
  loading: boolean;
  article: any | null;
}
const Article: React.FC<Props> = props => {
  const id = props.match.params.id;
  const [state, setState] = useState<state>({
    loading: true,
    article: null
  });
  useEffect(() => {
    window.scrollTo(0, 0);

    const getArticle = async () => {
      firestore
        .collection("articles")
        .where("Id", "==", `${id}`)
        .get()
        .then(data => {
          setState({
            ...state,
            loading: false,
            article: data.docs[0].data()
          });
        });
    };
    getArticle();
  }, []);
  console.log(state);
  return (
    <div>
      {state.loading ? (
        <div className="align-c">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div>
            <section className="site-section py-lg p0">
              <div className="container">
                <div className="row blog-entries">
                  <div className="col-md-12 col-lg-8 main-content">
                    <img
                      src={state.article.image}
                      alt="Image"
                      className="img-fluid mb-5"
                    />
                    <div className="post-meta">
                      <span className="author mr-2">
                        <img
                          src={state.article.author.image}
                          alt="Colorlib"
                          className="mr-2"
                        />{" "}
                        {state.article.author.name}
                      </span>
                      <span className="mr-2">March 15, 2018 </span>
                      <span className="ml-2"></span>
                    </div>
                    <h1 className="mb-4">{state.article.title}</h1>

                    <div className="post-content-body">
                      {ReactHtmlParser(state.article.content)}
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 sidebar">
                    <div className="no-desktop">
                      <br />
                      <br />
                    </div>
                    <div className="sidebar-box">
                      <div className="bio text-center">
                        <img
                          src={state.article.author.image}
                          alt="Image Placeholder"
                          className="img-fluid"
                        />
                        <div className="bio-body">
                          <h2> {state.article.author.name}</h2>
                          <p>{state.article.author.bio}</p>
                          <p>
                            <a href="#" className=" btn-primary btn-sm rounded">
                              More.
                            </a>
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
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
