import React, { useState, useEffect } from "react";
import ArchiveArticleCards from "./ArchiveArticleCards";
import { firestore } from "../utils/firebase";
interface Props {}
interface state {
  articles: Array<any>;
  notifications: Array<any>;
  loading: boolean;
}
const Archive: React.FC<Props> = () => {
  const [Gstate, setState] = useState<state>({
    articles: [],
    notifications: [],
    loading: true
  });
  useEffect(() => {
    const fetchNotiAndArti = async () => {
      let Articles: Array<object> = [];
      let Notifications: Array<object> = [];
      await firestore
        .collection("articles")
        .get()
        .then(data =>
          data.docs.forEach(doc => {
            Articles.push(doc.data());
          })
        );
      await firestore
        .collection("notifications")
        .get()
        .then(data =>
          data.docs.forEach(doc => {
            Notifications.push(doc.data());
          })
        );
      setState({
        ...Gstate,
        articles: Articles,
        notifications: Notifications,
        loading: false
      });
    };

    fetchNotiAndArti();
  }, []);
  console.log(Gstate);
  return (
    <div className="container">
      <div className="search-form-wrap mt-5">
        <form className="search-form">
          <div className="form-group">
            <span className="icon fa fa-search"></span>
            <h1>Search</h1>
            <input
              type="text"
              className="form-control w-2"
              id="s"
              placeholder="Title or author's name"
            />
          </div>
        </form>
      </div>
      <div className="row blog-entries mt-3">
        <div className="col-md-12 col-lg-12 main-content">
          <div className="row">
            {Gstate.loading ? (
              <div className="align-c">
                <div>
                  {" "}
                  <p>Loading</p>
                </div>
              </div>
            ) : (
              Gstate.articles.map(article => (
                <ArchiveArticleCards data={article} key={article.Id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
