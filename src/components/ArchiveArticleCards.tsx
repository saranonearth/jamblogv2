import React from "react";

interface Props {
  data: object | any;
}

const ArchiveArticleCards: React.FC<Props> = ({ data }) => {
  const date = new Date(data.date.seconds);
  const formatedDate = date.getFullYear();
  return (
    <>
      <div className="col-md-4">
        <a href="blog-single.html" className="blog-entry">
          <img src={data.image} alt="Image placeholder"></img>
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={data.author.image} alt="person" />
                <span className="ml-1">{data.author.name}</span>
              </span>

              <span className="mr-2">{formatedDate} </span>
              <span className="ml-2">
                {/* <span className="fa fa-comments"></span> 3 Likes */}
              </span>
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default ArchiveArticleCards;
