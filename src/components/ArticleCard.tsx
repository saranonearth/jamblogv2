import React from "react";

interface Props {}

const ArticleCard: React.FC<Props> = () => {
  return (
    <>
      <div className="col-md-6">
        <a href="blog-single.html" className="blog-entry">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Image placeholder"
          ></img>
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src="https://via.placeholder.com/30" alt="person" />
                <span className="ml-1"> Person 1</span>
              </span>

              <span className="mr-2">March 15, 2018 </span>
              <span className="ml-2">
                <span className="fa fa-comments"></span> 3 Likes
              </span>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
          </div>
        </a>
      </div>
    </>
  );
};

export default ArticleCard;
