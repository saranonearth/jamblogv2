import React from "react";
import ArchiveArticleCards from "./ArchiveArticleCards";

interface Props {}

const Archive: React.FC<Props> = () => {
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
            <ArchiveArticleCards />
            <ArchiveArticleCards />
            <ArchiveArticleCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
