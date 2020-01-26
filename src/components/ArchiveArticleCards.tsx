import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
interface Props {
  data: object | any;
}

const ArchiveArticleCards: React.FC<Props> = ({ data }) => {
  const date = new Date(data.date.seconds * 1000);
  const formatedDate = date.getFullYear();
  return (
    <>
      <div className="col-md-4">
        <Link to={`/article/${data.Id}`} className="blog-entry">
          <img
            className="articleImg"
            src={data.image}
            alt="Image placeholder"
          ></img>
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={data.author.image} alt="person" />
                <span className="ml-1">{data.author.name}</span>
              </span>

              <span className="mr-2">
                {moment(data.date.toDate()).format("ll")}{" "}
              </span>
              <span className="ml-2">
                {/* <span className="fa fa-comments"></span> 3 Likes */}
              </span>
            </div>
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ArchiveArticleCards;
