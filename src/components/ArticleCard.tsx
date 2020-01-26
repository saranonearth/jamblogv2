import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
interface Props {
  article: object | any;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="col-md-6">
        <Link to={`/article/${article.Id}`} className="blog-entry">
          <img
            className="articleImg"
            src={article.image}
            alt={article.title}
          ></img>
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={article.author.image} alt={article.author.name} />
                <span className="ml-1"> {article.author.name}</span>
              </span>

              <span className="mr-2">
                {moment(article.date.toDate().toString()).format("ll")}
              </span>
              <span className="ml-2">
                {/* <span className="fa fa-comments"></span> 3 Likes */}
              </span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ArticleCard;
