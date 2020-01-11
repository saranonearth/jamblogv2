import React, { useContext, useState, Profiler } from "react";

import Store from "../Store/Store";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";
import CreateArticle from "./CreateArticle";
import UserArticles from "./UserArticles";
interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { state } = useContext(Store);

  const [view, setView] = useState("profile");

  const notFound = () => {
    return (
      <>
        <h1>Something went wrong.</h1>
      </>
    );
  };

  const switchRender = (view: string) => {
    switch (view) {
      case "profile":
        return <Profile />;
      case "createArticle":
        return <CreateArticle />;
      case "articles":
        return <UserArticles />;
      default:
        return notFound();
    }
  };

  if (!state.isAuth) return <Redirect to="/" />;
  return (
    <div>
      <div className="d-container">
        <div className="mt-3 center">
          <h1 className="d-title">Dashboard</h1>
        </div>
        <div className="mt-2">
          <div className="d-top-bar">
            <div className="item-m" onClick={() => setView("profile")}>
              Profile
            </div>
            <div className="item-m" onClick={() => setView("articles")}>
              Articles
            </div>
            <div className="item-m" onClick={() => setView("createArticle")}>
              Create Article
            </div>
          </div>
        </div>
        <div>{switchRender(view)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
