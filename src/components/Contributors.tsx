import React from "react";

interface Props {}

const Contributors: React.FC<Props> = () => {
  const contributors = () => {
    return (
      <div className="col-md-2">
        <img
          src="https://via.placeholder.com/200"
          className="contributor-img"
          alt="author"
        />
        <p className="tc">Person 1</p>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <h2 className="mt-4 mb-4">Contributors</h2>
        <div className="row blog-entries mt-3">
          <div className="col-md-12 col-lg-12 main-content">
            <div className="row">
              {contributors()}
              {contributors()}
              {contributors()}
              {contributors()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
