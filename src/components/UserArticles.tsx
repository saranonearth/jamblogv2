import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../utils/firebase";
import Store from "../Store/Store";
import { withRouter, RouteComponentProps } from "react-router-dom";
interface Props extends RouteComponentProps {}
interface state {
  articles: Array<any>;
  notifications: Array<any>;
  loading: boolean;
}

const UserArticles: React.FC<Props> = ({ history }) => {
  const { state } = useContext(Store);
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
        .where("authorId", "==", `${state.uid}`)
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
  const articleDelete = (id: string) => {
    firestore
      .collection("articles")
      .where("Id", "==", `${id}`)
      .get()
      .then(article => {
        article.forEach(doc => {
          doc.ref.delete();
        });

        setState({
          ...Gstate,
          articles: Gstate.articles.filter(e => e.Id !== id)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <br />
        <div className="articles-container">
          <div className="articles-d">
            <h2>Your articles</h2>
            {Gstate.loading ? (
              <p>Loading</p>
            ) : Gstate.articles.length > 0 ? (
              Gstate.articles.map(d => (
                <div key={d.Id}>
                  <div className="article-card">
                    <h3 className="a-title">{d.title}</h3>
                    <p className="a-desc">{d.description}</p>
                    <div className="util-item">
                      {/* <div className="click">Edit</div> */}
                      <div>&nbsp;&nbsp;</div>
                      <div
                        className="click"
                        onClick={() => articleDelete(d.Id)}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>You haven't written any yet.</p>
            )}
          </div>
          <div className="notifications">
            <h2>Notifications</h2>
            {Gstate.loading ? (
              <p>Loading</p>
            ) : Gstate.notifications.length > 0 ? (
              Gstate.notifications.map((data, index) => (
                <div key={index} className="noti-card">
                  <p>{data.notification}</p>
                </div>
              ))
            ) : (
              <p>No notifications.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserArticles);
